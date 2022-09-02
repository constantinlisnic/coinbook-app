import React from "react";
import {
  DropdownItemContainer,
  SelectedWrapper,
  Img,
  DownArrow,
  DropdownWrapper,
  CurrencyWrapper,
} from "./CurrencyToggler.styles";

function DropdownItem(props) {
  return (
    <DropdownItemContainer onClick={() => props.handleClick(props.currency)}>
      <Img src={props.symbol} alt={`${props.curency} symbol`} />
      <div>{props.currency}</div>
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
    this.state.currencies.map((currency) => {
      currency.isActive = currency.name === selectedCurrency;
      return currency;
    });
    this.setState({ isExpanded: false, currencies: this.state.currencies });
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
          <DownArrow
            src={
              this.state.isExpanded
                ? "https://i.ibb.co/fNtddxw/upCaret.png"
                : "https://i.ibb.co/QJW7HtF/down-Caret.png"
            }
            alt="caret symbol"
          />
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
