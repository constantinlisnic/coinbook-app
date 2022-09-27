import React from "react";
import { WholePage } from "components/coin";

function CoinPage(props) {
  return <WholePage coinId={props.match.params.coinId} />;
}

export default CoinPage;
