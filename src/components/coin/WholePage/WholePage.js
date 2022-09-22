import React from "react";
import axios from "axios";
import { getURL } from "utils";
import {
  Summary,
  CurrencyConvertor,
  TimeChart,
  RangeSelector,
} from "components/coin";
import { LoadingSummary } from "components/loadingContainers";

class WholePage extends React.Component {
  state = {
    coinData: null,
    chartData: null,
    isLoading: false,
    errorMessage: null,
    days: "30",
  };

  getCoinData = async () => {
    try {
      this.setState({ isLoading: true });

      const coinDataPath = `coins/${this.props.coinId}`;
      const coinDataURL = getURL(coinDataPath);
      const { data: coinData } = await axios(coinDataURL);

      this.setState({ coinData, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  getChartData = async () => {
    try {
      const chartDataPath = `coins/${this.props.coinId}/market_chart`;
      const chartConfig = {
        vs_currency: this.props.currency.name,
        days: this.state.days,
      };
      const charDataURL = getURL(chartDataPath, chartConfig);
      const { data: chartData } = await axios(charDataURL);

      this.setState({ chartData });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  handleRangeChange = (days) => {
    this.setState({ days });
  };

  componentDidMount() {
    this.getCoinData();
    this.getChartData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.days !== prevState.days ||
      this.props.currency.name !== prevProps.currency.name
    ) {
      this.getChartData();
    }
  }

  render() {
    const isFetched =
      !this.state.isLoading && this.state.coinData && this.state.chartData;
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
          selectedRange={this.state.days}
        />
        <TimeChart
          chartData={this.state.chartData.prices}
          currencySymbol={this.props.currency.symbol}
        />
      </>
    ) : (
      <LoadingSummary error={this.state.errorMessage} />
    );
  }
}

export default WholePage;
