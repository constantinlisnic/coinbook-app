import React from "react";
import {
  Container,
  InputWrapper,
  ExchangeIcon,
  Label,
  Input,
} from "./CurrencyConvertor.styles";

class CurrencyConvertor extends React.Component {
  state = {
    currencyInput:
      this.props.coinData.market_data.current_price[this.props.currency],
    cryptoInput: 1,
  };

  handleChangeCurrency = (e) => {
    const { current_price } = this.props.coinData.market_data;
    const cryptoInput = (
      e.target.value / current_price[this.props.currency]
    ).toFixed(5);
    this.setState({ currencyInput: e.target.value, cryptoInput });
  };

  handleChangeCrypto = (e) => {
    const { current_price } = this.props.coinData.market_data;
    const currencyInput = (
      e.target.value * current_price[this.props.currency]
    ).toFixed(5);
    this.setState({ cryptoInput: e.target.value, currencyInput });
  };

  componentDidUpdate(prevProps) {
    if (this.props.currency !== prevProps.currency) {
      const { current_price } = this.props.coinData.market_data;
      this.setState({ currencyInput: current_price[this.props.currency] });
    }
  }

  render() {
    return (
      <Container>
        <div>
          <InputWrapper>
            <Label htmlFor="currencyInput">
              <div>{this.props.currency.toUpperCase()}</div>
            </Label>
            <Input
              id="currencyInput"
              type="number"
              value={this.state.currencyInput}
              onChange={this.handleChangeCurrency}
            />
          </InputWrapper>
        </div>
        <ExchangeIcon />
        <InputWrapper>
          <Label htmlFor="cryptoInput">
            <div>{this.props.coinData.symbol.toUpperCase()}</div>
          </Label>
          <Input
            id="cryptoInput"
            type="number"
            value={this.state.cryptoInput}
            onChange={this.handleChangeCrypto}
          />
        </InputWrapper>
      </Container>
    );
  }
}

export default CurrencyConvertor;
