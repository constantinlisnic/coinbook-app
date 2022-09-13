import { DownRedCaret, UpGreenCaret } from "styles";

function GainLossCaret({ priceChange }) {
  return priceChange > 0 ? <UpGreenCaret /> : <DownRedCaret />;
}

export default GainLossCaret;
