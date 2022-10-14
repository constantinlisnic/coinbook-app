import numeral from "numeral";
import { useAppSelector } from "hooks";
import { IndividualCoinProps as Props } from "IndividualCoinProps";
import DisplayPriceChange from "components/DisplayPriceChange";
import {
  Container,
  StyledBulletPoint,
  ItemWrapper,
  ItemName,
  BarWholeValue,
  VolumeFiller,
  SupplyFiller,
  PercentageWrapper,
  VolumePercentage,
  SupplyPercentage,
  InfinityDiv,
  BarWrapper,
} from "./RightSquare.styles";

function RightSquare(props: Props) {
  const {
    total_volume,
    current_price,
    total_supply,
    circulating_supply,
    market_cap,
    market_cap_change_percentage_24h_in_currency,
    fully_diluted_valuation,
  } = props.market_data;

  const { name: currencyName, symbol: currencySymbol } = useAppSelector(
    (state) => state.settings.activeCurrency
  );
  const volumeFiller = Math.round(
    (total_volume[currencyName as keyof typeof total_volume] /
      current_price[currencyName as keyof typeof total_volume] /
      total_supply) *
      100
  );
  const supplyFiller = Math.round((circulating_supply / total_supply) * 100);
  return (
    <Container>
      <div>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Market Cap:</ItemName>
          <div>
            {currencySymbol}
            {numeral(
              market_cap[currencyName as keyof typeof market_cap]
            ).format("0,0")}
          </div>
          <DisplayPriceChange
            priceChange={
              market_cap_change_percentage_24h_in_currency[
                currencyName as keyof typeof market_cap_change_percentage_24h_in_currency
              ]
            }
          />
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Fully Diluted Valuation:</ItemName>
          <div>
            {currencySymbol}
            {numeral(
              fully_diluted_valuation[
                currencyName as keyof typeof fully_diluted_valuation
              ]
            ).format("0,0")}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Volume 24h:</ItemName>
          <div>
            {currencySymbol}
            {numeral(
              total_volume[currencyName as keyof typeof total_volume]
            ).format("0,0")}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Volume / Market Cap:</ItemName>
          <div>
            {market_cap[currencyName as keyof typeof market_cap]
              ? numeral(
                  total_volume[currencyName as keyof typeof total_volume] /
                    market_cap[currencyName as keyof typeof market_cap]
                ).format("0,0.0000")
              : "N/A"}
          </div>
        </ItemWrapper>
      </div>
      <div>
        <ItemWrapper>
          <StyledBulletPoint style={{ color: "#80ced7" }} />
          <ItemName>Total Volume:</ItemName>
          <div>
            {numeral(
              Math.round(
                total_volume[currencyName as keyof typeof total_volume] /
                  current_price[currencyName as keyof typeof total_volume]
              )
            ).format("0,0")}
          </div>
          <div>{props.symbol.toUpperCase()}</div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint style={{ color: "#007ea7" }} />
          <ItemName>Circulating Supply:</ItemName>
          <div>{numeral(circulating_supply).format("0,0")}</div>
          <div>{props.symbol.toUpperCase()}</div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint style={{ color: "#003249" }} />
          <ItemName>Max Supply:</ItemName>
          {total_supply ? (
            <>
              <div>{numeral(total_supply).format("0,0")}</div>
              <div>
                <div>{props.symbol.toUpperCase()}</div>
              </div>
            </>
          ) : (
            <div>Infinity</div>
          )}
        </ItemWrapper>
      </div>
      <BarWrapper>
        <BarWholeValue>
          <SupplyFiller barWidth={supplyFiller}>
            <VolumeFiller barWidth={volumeFiller}></VolumeFiller>
          </SupplyFiller>
        </BarWholeValue>
        <PercentageWrapper divWidth={supplyFiller}>
          {total_supply ? (
            <>
              <VolumePercentage>{volumeFiller + "%"}</VolumePercentage>
              <SupplyPercentage>{supplyFiller + "%"}</SupplyPercentage>
            </>
          ) : (
            <InfinityDiv>Infinity</InfinityDiv>
          )}
        </PercentageWrapper>
      </BarWrapper>
    </Container>
  );
}

export default RightSquare;
