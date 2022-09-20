import React from "react";
import { WholePage } from "components/coin";

function CoinPage(props) {
  return (
    <WholePage coinId={props.match.params.coinId} currency={props.currency} />
  );
}

export default CoinPage;
