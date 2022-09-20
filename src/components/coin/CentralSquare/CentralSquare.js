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
  const { name: currencyName, symbol } = props.currency;
  const formatDate = (date) => {
    date = new Date(date);
    return date.toUTCString();
  };
  return (
    <Container>
      <PriceDiv>
        {symbol +
          numeral(current_price[currencyName]).format("0,0.00[00000000]")}
      </PriceDiv>
      <Change24h>
        <div>24h gain/loss: </div>
        <GainLoss>
          <ChangedValueDiv
            priceChange={price_change_24h_in_currency[currencyName]}
          >
            {symbol +
              numeral(
                price_change_24h_in_currency[currencyName].toFixed(3)
              ).format("0,0.000")}
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
            {symbol + numeral(ath[currencyName]).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>{formatDate(ath_date[currencyName])}</AllTimeDate>
        </div>
        <div>
          <AllTimeDiv>
            <DownRedCaret />
            <StyledSpan>All Time Low: </StyledSpan>
            {atl[currencyName].toString().includes("e")
              ? symbol + "0.000000..."
              : symbol + numeral(atl[currencyName]).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>{formatDate(atl_date[currencyName])}</AllTimeDate>
        </div>
      </AllTimeWrapper>
    </Container>
  );
}

export default CentralSquare;
