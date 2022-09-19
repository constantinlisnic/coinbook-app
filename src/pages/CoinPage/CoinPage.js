import React from "react";
import { WholePage } from "components/coin";

class CoinPage extends React.Component {
  render() {
    return <WholePage coinId={this.props.match.params.coinId} />;
  }
}

export default CoinPage;
