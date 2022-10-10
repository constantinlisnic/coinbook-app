import { DownRedCaret, UpGreenCaret } from "styles";

function GainLossCaret({ priceChange }: { priceChange: number }) {
  return priceChange > 0 ? <UpGreenCaret /> : <DownRedCaret />;
}

export default GainLossCaret;
