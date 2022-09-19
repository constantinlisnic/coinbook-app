import numeral from "numeral";
import DisplayPriceChange from "components/DisplayPriceChange";
import {
  Container,
  StyledBulletPoint,
  ItemWrapper,
  ItemName,
  BarWholeValue,
  BarFiller,
  BarInnerFiller,
} from "./RightSquare.styles";

function RightSquare(props) {
  return (
    <Container>
      <div>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Market Cap:</ItemName>
          <div>${numeral(props.market_data.market_cap.usd).format("0,0")}</div>
          <DisplayPriceChange
            priceChange={
              props.market_data.market_cap_change_percentage_24h_in_currency.usd
            }
          />
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Fully Diluted Valuation:</ItemName>
          <div>
            $
            {numeral(props.market_data.fully_diluted_valuation.usd).format(
              "0,0"
            )}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Volume 24h:</ItemName>
          <div>
            ${numeral(props.market_data.total_volume.usd).format("0,0")}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <ItemName>Volume / Market Cap:</ItemName>
          <div>
            {numeral(
              props.market_data.total_volume.usd /
                props.market_data.market_cap.usd
            ).format("0,0.0000")}
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
                props.market_data.total_volume.usd /
                  props.market_data.current_price.usd
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
          <div>{numeral(props.market_data.total_supply).format("0,0")}</div>
          <div>
            <div>{props.symbol.toUpperCase()}</div>
          </div>
        </ItemWrapper>
      </div>
      <div>
        <div></div>
        <div>
          {Math.round(
            (props.market_data.circulating_supply /
              props.market_data.total_supply) *
              100
          ) + "%"}
        </div>
        <div>100%</div>
      </div>
      <BarWholeValue>
        <BarFiller>
          <BarInnerFiller></BarInnerFiller>
        </BarFiller>
      </BarWholeValue>
    </Container>
  );
}

export default RightSquare;
