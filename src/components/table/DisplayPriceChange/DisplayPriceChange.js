import numeral from "numeral";
import { GainLossCaret } from "utils";
import { PriceChangeContainer } from "./DisplayPriceChange.styles";

function DisplayPriceChange({ priceChange }) {
  const formattedPrice = Math.abs(numeral(priceChange).format("0.00")) + "%";
  return (
    <PriceChangeContainer priceChange={priceChange}>
      <GainLossCaret priceChange={priceChange} />
      {formattedPrice}
    </PriceChangeContainer>
  );
}

export default DisplayPriceChange;
