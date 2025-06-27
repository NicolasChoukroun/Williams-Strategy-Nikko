//@version=6
// 2025 by Nikko
// CryptoNikkoid Alerts script may be freely distributed under the terms of the GPL-3.0 license.

strategy("William Strategy (Nikko)", overlay=false, initial_capital=10000, default_qty_value=20, pyramiding=5, default_qty_type=strategy.percent_of_equity, commission_value=0.06)

//-------------------------------------------------------------
// Williams %R Strategy Variables
bool isWilliamsSellSignal = false
bool isWilliamsBuySignal = false

// User inputs for Williams %R settings
int barMultipleForSignal = input.int(title="Bar Multiple", defval=3, group="Williams Settings")  // How often to check for signals (every 'x' bars)
bool closeAllOnBearishSignal = input.bool(title="Close All when Bearish?", defval=false, group="Williams Settings")  // Option to close all positions on a bearish signal

int williamsLength = input.int(title="Williams Length", defval=56, group="Williams Settings")  // Period used for Williams %R calculation
float upperWilliamsLimit = input.float(title="Williams % Limit Up", defval=-1, group="Williams Settings")  // Upper limit for Williams %R to trigger sell signal
float lowerWilliamsLimit = input.float(title="Williams % Limit Down", defval=-99, group="Williams Settings")  // Lower limit for Williams %R to trigger buy signal
priceSource = input(close, "Williams Source", group="Williams Settings")  // Source price for Williams %R calculation

// Simple Moving Average (SMA) for additional market trend confirmation
sma20 = ta.sma(close, 20)

// Check if we are on every 'x' bar
isEveryXBars = bar_index % barMultipleForSignal == 0
isPriceAboveSMA = close > sma20  // Condition for checking if the price is above the SMA

// Williams %R Calculation
williamsPercentR = (100 * (priceSource - ta.highest(high, williamsLength)) / (ta.highest(high, williamsLength) - ta.lowest(low, williamsLength)))

// Trigger Sell Signal when Williams %R exceeds the upper threshold
if williamsPercentR > upperWilliamsLimit
    isWilliamsSellSignal := true

// Trigger Buy Signal when Williams %R falls below the lower threshold
if williamsPercentR < lowerWilliamsLimit
    isWilliamsBuySignal := true

//-------------------------------------------------------------
// Trade Signals and Execution

bool buySignal = false
bool sellSignal = false

// Buy Signal Logic: Triggered if Williams Buy signal occurs and conditions are met
if isWilliamsBuySignal == true and isEveryXBars
    buySignal := true

// Sell Signal Logic: Triggered if Williams Sell signal occurs and conditions are met
if isWilliamsSellSignal == true and isEveryXBars
    sellSignal := true

// Execute Buy or Sell Strategy Orders
if buySignal
    strategy.entry("Buy Long", strategy.long)

if sellSignal
    // Close all positions if set to do so on a bearish signal, otherwise enter a short position
    if closeAllOnBearishSignal == true
        strategy.close_all()
    else
        strategy.entry("Sell Short", strategy.short)

// Plot Heatmap Based on Williams %R Value

// Reverse the normalization of Williams %R from range [-100, 0] to [0, 1]
normalizedWilliamsR = (-williamsPercentR) / 100  // Reverse normalization (bad -> good)

// Scale the normalized value to bar height (short = 0, tall = 100)
scaledHeatmapHeight = normalizedWilliamsR * 100

// Assign color: Green for good (lower) and Red for bad (higher)
colorR = (1 - normalizedWilliamsR) * 255  // Red component (more red for higher Williams %R)
colorG = normalizedWilliamsR * 255  // Green component (more green for lower Williams %R)
barColor = color.rgb(int(colorR), int(colorG), 0)  // Combine red and green for heatmap color

// Plot the heatmap bar
plot(scaledHeatmapHeight, title="Williams %R Heatmap", style=plot.style_columns, color=barColor, linewidth=6)

// Visual reference lines for top and bottom levels (optional)
hline(0, "Bottom", color=color.gray, linestyle=hline.style_dotted)
hline(100, "Top", color=color.gray, linestyle=hline.style_dotted)
