import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

function GlobalDataBar(props) {
  const { name: currencyName, symbol } = useSelector(
    (state) => state.settings.activeCurrency
  );
  const [globalData, setGlobalData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getGlobalData = async () => {
    try {
      setIsLoading(true);
      const url = getURL("global");
      const { data } = await axios(url);
      setGlobalData(data.data);
      setIsLoading(false);
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    getGlobalData();
    // eslint-disable-next-line
  }, []);

  const isFetched = !isLoading && Object.keys(globalData).length;
  const {
    active_cryptocurrencies,
    total_market_cap,
    total_volume,
    markets,
    market_cap_change_percentage_24h_usd,
    market_cap_percentage,
  } = globalData;

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
          {numeral(globalData.market_cap_percentage.btc).format("0.0") + "%"}
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
    <LoadingGlobalDataBar error={errorMessage} />
  );
}

export default GlobalDataBar;
