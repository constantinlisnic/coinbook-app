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
  const formatDate = (date) => {
    date = new Date(date);
    return date.toUTCString();
  };

  const priceChangeValue =
    (props.market_data.price_change_percentage_24h / 100) *
    props.market_data.current_price.usd;

  return (
    <Container>
      <PriceDiv>
        {"$" +
          numeral(props.market_data.current_price.usd).format(
            "0,0.00[00000000]"
          )}
      </PriceDiv>
      <Change24h>
        <div>24h gain/loss: </div>
        <GainLoss>
          <ChangedValueDiv priceChange={priceChangeValue}>
            {"$" + numeral(priceChangeValue.toFixed(2)).format("0,0.00")}
          </ChangedValueDiv>
          <DisplayPriceChange
            priceChange={props.market_data.price_change_percentage_24h}
          />
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
            {"$" +
              numeral(props.market_data.ath.usd).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>
            {formatDate(props.market_data.ath_date.usd)}
          </AllTimeDate>
        </div>
        <div>
          <AllTimeDiv>
            <DownRedCaret />
            <StyledSpan>All Time Low: </StyledSpan>
            {"$" +
              numeral(props.market_data.atl.usd).format("0,0.00[00000000]")}
          </AllTimeDiv>
          <AllTimeDate>
            {formatDate(props.market_data.atl_date.usd)}
          </AllTimeDate>
        </div>
      </AllTimeWrapper>
    </Container>
  );
}

export default CentralSquare;
