import React from "react";
import axios from "axios";
import { getURL } from "utils";
import {Summary, CurrencyConvertor,TimeChart, RangeSelector} from "components/coin";
<<<<<<< HEAD
import { Summary, TimeChart, RangeSelector } from "components/coin";
=======
import { Summary, CurrencyConvertor } from "components/coin";
>>>>>>> master
import { LoadingSummary } from "components/loadingContainers";

class WholePage extends React.Component {
  state = {
    coinData: null,
    chartData: null,
    isLoading: false,
    errorMessage: null,
  };

  getCoinData = async () => {
    try {
      this.setState({ isLoading: true });

      const coinDataPath = `coins/${this.props.coinId}`;
      const coinDataURL = getURL(coinDataPath);
      const { data: coinData } = await axios(coinDataURL);

      const chartDataPath = `coins/${this.props.coinId}/market_chart`;
      const chartConfig = {
        vs_currency: this.props.currency.name,
        days: 10,
      };
      const charDataURL = getURL(chartDataPath, chartConfig);
      const { data: chartData } = await axios(charDataURL);

      this.setState({ coinData, chartData, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  handleRangeChange = (days) => {
    this.setState({ days });
  };

  componentDidMount() {
    this.getCoinData();
  }

  render() {
    const isFetched = !this.state.isLoading && this.state.coinData;
    return isFetched ? (
      <>
        <Summary
          coinData={this.state.coinData}
          currency={this.props.currency}
        />
        <CurrencyConvertor
          currency={this.props.currency.name}
          coinData={this.state.coinData}
        />
        <RangeSelector
          handleRangeChange={this.handleRangeChange}
          selectedDays={this.state.days}
        />
        <TimeChart
          chartData={this.state.chartData.prices}
          currencySymbol={this.props.currency.symbol}
        />
<<<<<<< HEAD
        <RangeSelector
          handleRangeChange={this.handleRangeChange}
          selectedDays={this.state.days}
        />
        <TimeChart
          chartData={this.state.chartData.prices}
          currencySymbol={this.props.currency.symbol}
=======
        <CurrencyConvertor
          currency={this.props.currency.name}
          coinData={this.state.coinData}
>>>>>>> master
        />
      </>
    ) : (
      <LoadingSummary error={this.state.errorMessage} />
    );
  }
}

export default WholePage;
