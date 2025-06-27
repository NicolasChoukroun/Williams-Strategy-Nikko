# Nikko William Strategy

## Overview

The **Nikko William Strategy** is a trading strategy built using the **Williams %R** indicator, designed for use in **TradingView**. The strategy generates buy and sell signals based on the overbought and oversold conditions detected by the Williams %R oscillator. This script offers features such as periodic buy and sell signals, automatic position closures when bearish signals occur, and visual heatmap representations to assess market conditions.

## Features

- **Williams %R Based Buy/Sell Signals**: Buy signals are triggered when the Williams %R crosses below a specified lower limit, and sell signals are triggered when it crosses above a specified upper limit.
- **Periodic Entry**: Trades are executed every 'x' bars based on user-defined parameters, avoiding too frequent trading.
- **Close All on Bearish Signal**: Option to close all open positions when a bearish condition occurs.
- **Visual Heatmap**: Displays a heatmap based on Williams %R to visualize the market strength.
- **Adjustable Parameters**: The strategy is fully customizable, including settings for Williams %R length, limits, bar multiples, and more.

## Benefits

1. **Clear Buy/Sell Signals**: 
   - Provides easy-to-interpret buy and sell signals using the Williams %R oscillator.
   
2. **Customizable**: 
   - Allows traders to adjust key parameters like the **Williams %R length**, **upper and lower limits**, and **Bar Multiple**, making it flexible for different trading styles and assets.
   
3. **Time-Based Trading**: 
   - Limits trades to specific intervals (every 'x' bars) to avoid overtrading and ensure a cleaner trading strategy.

4. **Risk Management**: 
   - Includes the option to **close all positions** on a bearish signal, helping traders lock in profits or prevent losses during market downturns.

5. **Heatmap Visualization**: 
   - Displays a color-coded heatmap representing the strength of the current market conditions, providing quick visual cues for decision-making.

6. **Periodically Checks Conditions**: 
   - Allows periodic checks (every 'x' bars) to execute trades, making it ideal for swing or position traders who want to avoid frequent trades.

## How It Works

The strategy is based on the **Williams %R** indicator, which is a momentum oscillator that measures the relative position of the closing price within the price range over a given period. The script includes the following components:

1. **Williams %R Calculation**:
   - The **Williams %R** is calculated using the highest high and lowest low over a user-defined lookback period. It outputs values between -100 (most oversold) and 0 (most overbought).

2. **Trade Conditions**:
   - **Buy Condition**: Triggered when the **Williams %R** crosses below the **lower limit** and the price is above the **Simple Moving Average (SMA)** of 20 periods. The trade will only be executed every 'x' bars, based on the **Bar Multiple**.
   - **Sell Condition**: Triggered when the **Williams %R** crosses above the **upper limit** and the price is above the **SMA** of 20 periods, executed every 'x' bars.

3. **Trade Execution**:
   - When the buy signal is triggered, the script enters a **long position**.
   - When the sell signal is triggered, the script enters a **short position**.
   - If the option to **close all on bearish signal** is enabled, the script will close all positions when a bearish condition occurs.

4. **Visualization**:
   - A heatmap is displayed based on the Williams %R value, with a color scale from **red (bad market)** to **green (good market)**, representing the current market strength.
   - The bar height and color change dynamically based on the Williams %R, helping traders quickly assess market conditions.

## Parameters

### Williams Settings
- **Williams Length**: The number of bars to look back for calculating the Williams %R. Default is 56.
- **Williams % Limit Up**: The upper limit of the Williams %R value above which the script will trigger a sell signal. Default is -1.
- **Williams % Limit Down**: The lower limit of the Williams %R value below which the script will trigger a buy signal. Default is -99.
- **Bar Multiple**: Specifies how frequently (every 'x' bar) the strategy evaluates for buy and sell signals. Default is 3.
- **Close All when Bearish**: Option to close all positions when a bearish signal occurs. Default is false.

### Trade Settings
- **Initial Capital**: The starting capital for the strategy. Default is 10,000.
- **Position Sizing**: The percentage of equity used for each trade. Default is 20%.
- **Pyramiding**: Allows for additional entries into the same direction during the same trade. Default is 5.
- **Commission**: The commission rate per trade. Default is 0.06.

## Usage

This strategy can be used on any asset that exhibits a strong momentum trend. It is particularly effective for:

- **Swing Traders** who want to enter and exit positions based on momentum indicators.
- **Position Traders** who wish to trade with a longer-term focus, executing trades every few bars.
- **Risk-Averse Traders** who want to minimize the risk of holding positions during bearish trends by using the "Close All when Bearish" feature.

### Steps for Usage

1. **Customize Parameters**: Adjust the parameters according to your trading style and asset preferences.
2. **Add Strategy to Chart**: Add the strategy to your chart on TradingView.
3. **Monitor the Heatmap**: Observe the heatmap to assess the market strength and make decisions on potential trades.
4. **Execute Trades**: The strategy will automatically enter and exit trades based on the buy and sell conditions defined by the **Williams %R** indicator.

## Example Chart

Add the strategy to a chart and you’ll see the **Williams %R** oscillator being used to identify overbought and oversold conditions. The strategy will execute trades based on these conditions and the visual heatmap will reflect market strength dynamically.

---

### License

This script is open-source and licensed under the **GPL-3.0 license**. Feel free to use, modify, and distribute it under the terms of this license.

---

### Conclusion

The **Nikko William Strategy** is a comprehensive, customizable trading strategy that leverages the **Williams %R** indicator for momentum-based trading. With adjustable parameters, risk management features, and visual heatmap analysis, it provides a versatile solution for traders looking to automate their trading decisions while maintaining full control over their strategy's execution.
