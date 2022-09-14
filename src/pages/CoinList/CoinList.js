import React from "react";
import { FullTable } from "components/table";
import { TwoMainCharts } from "components/charts";
class CoinList extends React.Component {
  render() {
    return (
      <>
        <TwoMainCharts currency={this.props.currency} />
        <FullTable currency={this.props.currency} />
      </>
    );
  }
}

export default CoinList;
