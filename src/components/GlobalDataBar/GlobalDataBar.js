import { useSelector } from "react-redux";
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
import { GainLossCaret } from "utils";
import { useGetGlobalDataQuery } from "store/apiSlice";

function GlobalDataBar() {
  const { name: currencyName, symbol } = useSelector(
    (state) => state.settings.activeCurrency
  );
  const {
    data: globalData,
    isSuccess,
    isLoading,
    error,
  } = useGetGlobalDataQuery();

  const {
    active_cryptocurrencies,
    total_market_cap,
    total_volume,
    markets,
    market_cap_change_percentage_24h_usd,
    market_cap_percentage,
  } = isSuccess ? globalData.data : {};

  return (
    <>
      {!isLoading && isSuccess ? (
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
            <div>{numeral(market_cap_percentage.btc).format("0.0") + "%"}</div>
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
        <LoadingGlobalDataBar error={error} />
      )}
    </>
  );
}

export default GlobalDataBar;
