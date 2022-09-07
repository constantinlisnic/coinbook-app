import React from "react";
import axios from "axios";
import { getURL } from "utils";
import { LineChart, BarChart } from "components/charts";
import { ChartsContainer } from "./TwoMainCharts.styles";

class TwoMainCharts extends React.Component {
  state = {
    chartData: null,
    isLoading: false,
    errorMessage: null,
  };

  getChartData = async () => {
    try {
      this.setState({ isLoading: true });
      const path = "coins/bitcoin/market_chart";
      const config = {
        vs_currency: "usd",
        days: 60,
        interval: "daily",
      };
      const url = getURL(path, config);
      const response = await axios(url);
      this.setState({ chartData: response.data, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  componentDidMount() {
    this.getChartData();
  }

  render() {
    const isFetched = !this.state.isLoading && this.state.chartData;
    return (
      isFetched && (
        <ChartsContainer>
          <LineChart {...this.state.chartData} />
          <BarChart {...this.state.chartData} />
        </ChartsContainer>
      )
    );
  }
}

export default TwoMainCharts;
