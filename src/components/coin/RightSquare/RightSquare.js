import numeral from "numeral";
import { useSelector } from "react-redux";
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

function RightSquare(props) {
  const { name: currencyName, symbol: currencySymbol } = useSelector(
    (state) => state.settings.activeCurrency
  );
  const volumeFiller = Math.round(
    (props.market_data.total_volume[currencyName] /
      props.market_data.current_price[currencyName] /
      props.market_data.total_supply) *
      100
  );
  const supplyFiller = Math.round(
    (props.market_data.circulating_supply / props.market_data.total_supply) *
      100
  );
  return (
    <Container>
      <div>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Market Cap:</ItemName>
          <div>
            {currencySymbol}
            {numeral(props.market_data.market_cap[currencyName]).format("0,0")}
          </div>
          <DisplayPriceChange
            priceChange={
              props.market_data.market_cap_change_percentage_24h_in_currency[
                currencyName
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
              props.market_data.fully_diluted_valuation[currencyName]
            ).format("0,0")}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Volume 24h:</ItemName>
          <div>
            {currencySymbol}
            {numeral(props.market_data.total_volume[currencyName]).format(
              "0,0"
            )}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Volume / Market Cap:</ItemName>
          <div>
            {props.market_data.market_cap[currencyName]
              ? numeral(
                  props.market_data.total_volume[currencyName] /
                    props.market_data.market_cap[currencyName]
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
                props.market_data.total_volume[currencyName] /
                  props.market_data.current_price[currencyName]
              )
            ).format("0,0")}
          </div>
          <div>{props.symbol.toUpperCase()}</div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint style={{ color: "#007ea7" }} />
          <ItemName>Circulating Supply:</ItemName>
          <div>
            {numeral(props.market_data.circulating_supply).format("0,0")}
          </div>
          <div>{props.symbol.toUpperCase()}</div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint style={{ color: "#003249" }} />
          <ItemName>Max Supply:</ItemName>
          {props.market_data.total_supply ? (
            <>
              <div>{numeral(props.market_data.total_supply).format("0,0")}</div>
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
          {props.market_data.total_supply ? (
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
