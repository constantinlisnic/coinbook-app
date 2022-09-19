import numeral from "numeral";
import { DisplayPriceChange } from "components";
import { UpGreenCaret, DownRedCaret } from "styles";
import {
  Container,
  PriceDiv,
  Change24h,
  AllTimeDiv,
  AllTimeWrapper,
  StyledSpan,
  AllTimeDate,
  ChangedValueDiv,
  GainLoss,
} from "./CentralSquare.styles";

function CentralSquare(props) {
  const {
    current_price,
    price_change_24h_in_currency,
    price_change_percentage_24h,
    ath,
    ath_date,
    atl,
    atl_date,
  } = props.market_data;
  const formatDate = (date) => {
    date = new Date(date);
    return date.toUTCString();
  };
  return (
    <Container>
      <PriceDiv>
        {"$" + numeral(current_price.usd).format("0,0.00[00000000]")}
      </PriceDiv>
      <Change24h>
        <div>24h gain/loss: </div>
        <GainLoss>
          <ChangedValueDiv priceChange={price_change_24h_in_currency.usd}>
            {"$" +
              numeral(price_change_24h_in_currency.usd.toFixed(3)).format(
                "0,0.000"
              )}
          </ChangedValueDiv>
          <DisplayPriceChange priceChange={price_change_percentage_24h} />
        </GainLoss>
      </Change24h>
      <img
        src="https://i.ibb.co/vz0fLdP/Icon-awesome-layer-group.png"
        alt="stack icon"
      />
      <AllTimeWrapper>
        <div>
          <AllTimeDiv>
            <UpGreenCaret />
            <StyledSpan>All Time High: </StyledSpan>
            {"$" + numeral(ath.usd).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>{formatDate(ath_date.usd)}</AllTimeDate>
        </div>
        <div>
          <AllTimeDiv>
            <DownRedCaret />
            <StyledSpan>All Time Low: </StyledSpan>
            {atl.usd.toString().includes("e")
              ? "$0.000000..."
              : "$" + numeral(atl.usd).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>{formatDate(atl_date.usd)}</AllTimeDate>
        </div>
      </AllTimeWrapper>
    </Container>
  );
}

export default CentralSquare;
