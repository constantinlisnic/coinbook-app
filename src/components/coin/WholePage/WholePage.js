import React from "react";
import axios from "axios";
import { getURL } from "utils";
import { Summary } from "components/coin";

class WholePage extends React.Component {
  state = {
    coinData: null,
    isLoading: false,
    errorMessage: null,
  };

  getCoinData = async () => {
    try {
      this.setState({ isLoading: true });
      const path = `coins/${this.props.coinId}`;
      const url = getURL(path);
      const { data } = await axios(url);
      this.setState({ coinData: data, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  componentDidMount() {
    this.getCoinData();
  }

  render() {
    const isFetched = !this.state.isLoading && this.state.coinData;
    return (
      isFetched && (
        <>
          <Summary coinData={this.state.coinData} />
        </>
      )
    );
  }
}

export default WholePage;
