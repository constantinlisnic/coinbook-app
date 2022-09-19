import numeral from "numeral";
import DisplayPriceChange from "components/DisplayPriceChange";
import {
  Container,
  StyledBulletPoint,
  ItemWrapper,
} from "./RightSquare.styles";

function RightSquare(props) {
  return (
    <Container>
      <div>
        <ItemWrapper>
          <StyledBulletPoint />
          <div>Market Cap:</div>
          <div>${numeral(props.market_data.market_cap.usd).format("0,0")}</div>
          <DisplayPriceChange
            priceChange={
              props.market_data.market_cap_change_percentage_24h_in_currency.usd
            }
          />
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <div>Fully Diluted Valuation:</div>
          <div>
            $
            {numeral(props.market_data.fully_diluted_valuation.usd).format(
              "0,0"
            )}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <div>Volume 24h:</div>
          <div>
            ${numeral(props.market_data.total_volume.usd).format("0,0")}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <div>Volume / Market Cap:</div>
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
          <StyledBulletPoint />
          <div>Total Volume:</div>
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
          <StyledBulletPoint />
          <div>Circulating Supply:</div>
          <div>
            {numeral(props.market_data.circulating_supply).format("0,0")}
          </div>
          <div>{props.symbol.toUpperCase()}</div>
        </ItemWrapper>
        <ItemWrapper>
          <StyledBulletPoint />
          <div>Max Supply:</div>
          <div>{numeral(props.market_data.total_supply).format("0,0")}</div>
          <div>
            <div>{props.symbol.toUpperCase()}</div>
          </div>
        </ItemWrapper>
      </div>
    </Container>
  );
}

export default RightSquare;
