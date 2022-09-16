import React from "react";
import { UpGreenCaret, DownGreenCaret } from "styles";
import {
  DropdownItemContainer,
  SelectedWrapper,
  Img,
  DropdownWrapper,
  CurrencyWrapper,
} from "./CurrencyToggler.styles";

function DropdownItem({
  currency = "",
  symbol = "",
  handleClick = () => null,
}) {
  return (
    <DropdownItemContainer onClick={() => handleClick(currency)}>
      <Img src={symbol} alt={`${currency} symbol`} />
      <div>{currency.toUpperCase()}</div>
    </DropdownItemContainer>
  );
}

class CurrencyToggler extends React.Component {
  state = {
    isExpanded: false,
    currencies: [
      {
        name: "usd",
        symbol: "$",
        IconURL: "https://i.ibb.co/YkKkc6J/dollar-icon.png",
      },
      {
        name: "eur",
        symbol: "€",
        IconURL: "https://i.ibb.co/tP0n42j/euro-icon.png",
      },
      {
        name: "gbp",
        symbol: "£",
        IconURL: "https://i.ibb.co/cNSyGZP/pound-icon.png",
      },
      {
        name: "btc",
        symbol: "₿",
        IconURL: "https://i.ibb.co/PWh7SxB/btc32px.png",
      },
      {
        name: "eth",
        symbol: "Ξ",
        IconURL: "https://i.ibb.co/QDXPJfV/eth32px.png",
      },
    ],
  };

  handleClick = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  handleSelect = (selectedCurrency) => {
    const activeCurrency = this.state.currencies.find(
      (currency) => currency.name === selectedCurrency
    );
    this.setState({ isExpanded: false, activeCurrency });
    this.props.toggleActiveCurrency(activeCurrency);
  };

  render() {
    const { name, IconURL } = this.props.currency;
    return (
      <CurrencyWrapper>
        <SelectedWrapper onClick={this.handleClick}>
          <Img src={IconURL} alt={`${name} symbol`} />
          <div>{name.toUpperCase()}</div>
          {this.state.isExpanded ? <UpGreenCaret /> : <DownGreenCaret />}
        </SelectedWrapper>
        <DropdownWrapper>
          {this.state.isExpanded &&
            this.state.currencies.map((currency) => {
              return (
                <DropdownItem
                  key={currency.name}
                  symbol={currency.IconURL}
                  currency={currency.name}
                  handleClick={this.handleSelect}
                />
              );
            })}
        </DropdownWrapper>
      </CurrencyWrapper>
    );
  }
}

export default CurrencyToggler;
