import React from "react";
import axios from "axios";
import { getURL } from "utils";
import { Summary, TimeChart, RangeSelector } from "components/coin";
import { LoadingSummary } from "components/loadingContainers";

class WholePage extends React.Component {
  state = {
    coinData: null,
    chartData: null,
    isLoading: false,
    errorMessage: null,
    days: 10,
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
        days: this.state.days,
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

  // componentDidUpdate(prevState) {
  //   if (this.state.days !== prevState.days) {
  //     // this.getCoinData();
  //   }
  // }

  render() {
    const isFetched = !this.state.isLoading && this.state.coinData;
    return isFetched ? (
      <>
        <Summary
          coinData={this.state.coinData}
          currency={this.props.currency}
        />
        <RangeSelector handleRangeChange={this.handleRangeChange} />
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
