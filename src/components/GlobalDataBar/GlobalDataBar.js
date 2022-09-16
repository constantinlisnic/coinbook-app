import React from "react";
import axios from "axios";
import numeral from "numeral";
import { ProgressBar } from "components";
import { LoadingGlobalDataBar } from "components/loadingContainers";
import { BulletDot } from "styles";
import {
  MarketCapDiv,
  TotalVolumeDiv,
  BTCIcon,
  BTCPercentageDiv,
  ETHPercentageDiv,
  ETHIcon,
} from "./GlobalDataBar.styles";
import { getURL, GainLossCaret } from "utils";

class GlobalDataBar extends React.Component {
  state = {
    globalData: {},
    isLoading: false,
    errorMessage: null,
  };
  getGlobalData = async () => {
    try {
      this.setState({ isLoading: true });
      const url = getURL("global");
      const response = await axios(url);
      this.setState({ globalData: response.data.data, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  componentDidMount() {
    this.getGlobalData();
  }

  render() {
    const isFetched =
      !this.state.isLoading && Object.keys(this.state.globalData).length;
    const {
      active_cryptocurrencies,
      total_market_cap,
      total_volume,
      markets,
      market_cap_change_percentage_24h_usd,
      market_cap_percentage,
    } = this.state.globalData;
    const { name: currencyName, symbol } = this.props.currency;

    return isFetched ? (
      <>
        <div>Coins: {numeral(active_cryptocurrencies).format("0,0")}</div>
        <div>Exchanges: {markets}</div>
        <MarketCapDiv>
          <BulletDot />
          {symbol +
            numeral(total_market_cap[currencyName])
              .format("(0.00a)")
              .toLocaleUpperCase()}
          <GainLossCaret priceChange={market_cap_change_percentage_24h_usd} />
        </MarketCapDiv>
        <TotalVolumeDiv>
          <BulletDot />
          {symbol +
            numeral(total_volume[currencyName])
              .format("(0.00a)")
              .toLocaleUpperCase()}
          <ProgressBar
            barWidth={70}
            filler={total_volume[currencyName]}
            wholeValue={total_market_cap[currencyName]}
          />
        </TotalVolumeDiv>
        <BTCPercentageDiv>
          <BTCIcon />
          <div>
            {numeral(this.state.globalData.market_cap_percentage.btc).format(
              "0.0"
            ) + "%"}
          </div>
          <ProgressBar
            barWidth={70}
            filler={market_cap_percentage.btc / 100}
            wholeValue={1}
          />
        </BTCPercentageDiv>
        <ETHPercentageDiv>
          <ETHIcon />
          <div>{numeral(market_cap_percentage.eth).format("0.0") + "%"}</div>
          <ProgressBar
            barWidth={70}
            filler={market_cap_percentage.eth / 100}
            wholeValue={1}
          />
        </ETHPercentageDiv>
      </>
    ) : (
      <LoadingGlobalDataBar error={this.state.errorMessage} />
    );
  }
}

export default GlobalDataBar;
