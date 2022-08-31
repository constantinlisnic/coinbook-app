import React from "react";

class CoinPage extends React.Component {
  render() {
    return <div>{this.props.match.params.coinId}</div>;
  }
}

export default CoinPage;
