import React from "react";
import axios from "axios";
import numeral from "numeral";
import { LoadingGlobalDataBar, ProgressBar } from "components";
import { UpGreenCaret, DownRedCaret, BulletDot } from "styles";
import {
  MarketCapDiv,
  TotalVolumeDiv,
  BTCIcon,
  BTCPercentageDiv,
  ETHPercentageDiv,
  ETHIcon,
} from "./GlobalDataBar.styles";
import { isNegative } from "utils";

class GlobalDataBar extends React.Component {
  state = {
    globalData: {},
    isLoading: false,
    errorMessage: null,
  };
  getGlobalData = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios(`${process.env.REACT_APP_ENDPOINT}/global`);
      this.setState({ globalData: response.data.data, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  componentDidMount() {
    this.getGlobalData();
  }

  render() {
    const haveData =
      !this.state.isLoading && Object.keys(this.state.globalData).length;
    const {
      active_cryptocurrencies,
      total_market_cap,
      total_volume,
      markets,
      market_cap_change_percentage_24h_usd,
      market_cap_percentage,
    } = this.state.globalData;

    return haveData ? (
      <>
        <div>Coins: {numeral(active_cryptocurrencies).format("0,0")}</div>
        <div>Exchanges: {markets}</div>
        <MarketCapDiv>
          <BulletDot />
          {numeral(total_market_cap.usd)
            .format("($ 0.00 a)")
            .toLocaleUpperCase()}
          {isNegative(market_cap_change_percentage_24h_usd) ? (
            <DownRedCaret />
          ) : (
            <UpGreenCaret />
          )}
        </MarketCapDiv>
        <TotalVolumeDiv>
          <BulletDot />
          {numeral(total_volume.usd).format("($ 0.00 a)").toLocaleUpperCase()}
          <ProgressBar
            filler={total_volume.usd}
            wholeValue={total_market_cap.usd}
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
            filler={market_cap_percentage.btc / 100}
            wholeValue={1}
          />
        </BTCPercentageDiv>
        <ETHPercentageDiv>
          <ETHIcon />
          <div>{numeral(market_cap_percentage.eth).format("0.0") + "%"}</div>
          <ProgressBar
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
