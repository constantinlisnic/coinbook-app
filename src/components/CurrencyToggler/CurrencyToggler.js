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
      <div>{currency}</div>
    </DropdownItemContainer>
  );
}

class CurrencyToggler extends React.Component {
  state = {
    isExpanded: false,
    currencies: [
      {
        name: "USD",
        isActive: true,
        symbolURL: "https://i.ibb.co/YkKkc6J/dollar-icon.png",
      },
      {
        name: "GBP",
        isActive: false,
        symbolURL: "https://i.ibb.co/cNSyGZP/pound-icon.png",
      },
      {
        name: "EUR",
        isActive: false,
        symbolURL: "https://i.ibb.co/tP0n42j/euro-icon.png",
      },
    ],
  };

  handleClick = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  handleSelect = (selectedCurrency) => {
    const currencies = this.state.currencies.map((currency) => ({
      ...currency,
      isActive: currency.name === selectedCurrency,
    }));
    this.setState({ isExpanded: false, currencies });
  };

  render() {
    const selectedCurrency = this.state.currencies.find(
      (currency) => currency.isActive
    );
    return (
      <CurrencyWrapper>
        <SelectedWrapper onClick={this.handleClick}>
          <Img
            src={selectedCurrency.symbolURL}
            alt={`${selectedCurrency.name} symbol`}
          />
          <div>{selectedCurrency.name}</div>
          {this.state.isExpanded ? <UpGreenCaret /> : <DownGreenCaret />}
        </SelectedWrapper>
        <DropdownWrapper>
          {this.state.isExpanded &&
            this.state.currencies.map((currency) => {
              return (
                <DropdownItem
                  key={currency.name}
                  symbol={currency.symbolURL}
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
