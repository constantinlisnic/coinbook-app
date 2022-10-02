import numeral from "numeral";
import { useSelector } from "react-redux";
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
  StackIcon,
} from "./CentralSquare.styles";

function CentralSquare(props) {
  const { name: currencyName, symbol: currencySymbol } = useSelector(
    (state) => state.settings.activeCurrency
  );
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
        {current_price[currencyName]?.toString().includes("e")
          ? "$0.000000..."
          : currencySymbol +
            numeral(current_price[currencyName]).format("0,0.00[00000000]")}
      </PriceDiv>
      <Change24h>
        <div>24h gain/loss: </div>
        <GainLoss>
          <ChangedValueDiv
            priceChange={price_change_24h_in_currency[currencyName]}
          >
            {currencySymbol +
              numeral(
                price_change_24h_in_currency[currencyName]?.toFixed(3)
              ).format("0,0.000")}
          </ChangedValueDiv>
          <DisplayPriceChange priceChange={price_change_percentage_24h} />
        </GainLoss>
      </Change24h>
      <StackIcon />
      <AllTimeWrapper>
        <div>
          <AllTimeDiv>
            <UpGreenCaret />
            <StyledSpan>All Time High: </StyledSpan>
            {ath[currencyName]?.toString().includes("e")
              ? currencySymbol + "0.000000..."
              : currencySymbol +
                numeral(ath[currencyName]).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>{formatDate(ath_date[currencyName])}</AllTimeDate>
        </div>
        <div>
          <AllTimeDiv>
            <DownRedCaret />
            <StyledSpan>All Time Low: </StyledSpan>
            {atl[currencyName]?.toString().includes("e")
              ? currencySymbol + "0.000000..."
              : currencySymbol +
                numeral(atl[currencyName]).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>{formatDate(atl_date[currencyName])}</AllTimeDate>
        </div>
      </AllTimeWrapper>
    </Container>
  );
}

export default CentralSquare;
