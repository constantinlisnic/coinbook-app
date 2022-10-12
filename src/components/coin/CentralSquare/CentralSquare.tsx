import numeral from "numeral";
import { useAppSelector } from "hooks";
import { DisplayPriceChange } from "components";
import { IndividualCoinProps as Props } from "IndividualCoinProps";
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

function CentralSquare(props: Props) {
  const { name: currencyName, symbol: currencySymbol } = useAppSelector(
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
  const formatDate = (date: string | number | Date) => {
    date = new Date(date);
    return date.toUTCString();
  };
  return (
    <Container>
      <PriceDiv>
        {current_price[currencyName as keyof typeof current_price]
          ?.toString()
          .includes("e")
          ? currencySymbol + "0.000000..."
          : currencySymbol +
            numeral(
              current_price[currencyName as keyof typeof current_price]
            ).format("0,0.00[00000000]")}
      </PriceDiv>
      <Change24h>
        <div>24h gain/loss: </div>
        <GainLoss>
          <ChangedValueDiv
            priceChange={
              price_change_24h_in_currency[
                currencyName as keyof typeof price_change_24h_in_currency
              ]
            }
          >
            {currencySymbol +
              numeral(
                price_change_24h_in_currency[
                  currencyName as keyof typeof price_change_24h_in_currency
                ]?.toFixed(3)
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
            {ath[currencyName as keyof typeof ath]?.toString().includes("e")
              ? currencySymbol + "0.000000..."
              : currencySymbol +
                numeral(ath[currencyName as keyof typeof ath]).format(
                  "0,0.00[00000000]"
                )}
          </AllTimeDiv>
          <AllTimeDate>
            {formatDate(ath_date[currencyName as keyof typeof ath_date])}
          </AllTimeDate>
        </div>
        <div>
          <AllTimeDiv>
            <DownRedCaret />
            <StyledSpan>All Time Low: </StyledSpan>
            {atl[currencyName as keyof typeof atl]?.toString().includes("e")
              ? currencySymbol + "0.000000..."
              : currencySymbol +
                numeral(atl[currencyName as keyof typeof atl]).format(
                  "0,0.00[00000000]"
                )}
          </AllTimeDiv>
          <AllTimeDate>
            {formatDate(atl_date[currencyName as keyof typeof atl_date])}
          </AllTimeDate>
        </div>
      </AllTimeWrapper>
    </Container>
  );
}

export default CentralSquare;
