import React from "react";
import { FullTable } from "components/table";
import { TwoMainCharts } from "components/charts";

function CoinList(props) {
  return (
    <>
      <TwoMainCharts currency={props.currency} />
      <FullTable currency={props.currency} />
    </>
  );
}

export default CoinList;
