import React from "react";
import {
  DropdownItemContainer,
  SelectedWrapper,
  Img,
  DownArrow,
  DropdownWrapper,
  CurrencyWrapper,
} from "./CurrencyToggle.styles";

function DropdownItem(props) {
  return (
    <DropdownItemContainer onClick={() => props.handleClick(props.currency)}>
      <Img src={props.symbol} alt={`${props.curency} symbol`} />
      <div>{props.currency}</div>
    </DropdownItemContainer>
  );
}

class CurrencyToggle extends React.Component {
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
      return currency.name === selectedCurrency
        ? (currency.isActive = true)
        : (currency.isActive = false);
    });
    this.setState({ isExpanded: false });
  };

  render() {
    return (
      <CurrencyWrapper>
        <SelectedWrapper onClick={this.handleClick}>
          {this.state.currencies.map((currency) => {
            return (
              currency.isActive && (
                <React.Fragment key={currency.name}>
                  <Img
                    src={currency.symbolURL}
                    alt={`${currency.name} symbol`}
                  />
                  <div>{currency.name}</div>
                </React.Fragment>
              )
            );
          })}
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

export default CurrencyToggle;
