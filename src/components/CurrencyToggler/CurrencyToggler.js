import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "store/settingsSlice";
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

function CurrencyToggler(props) {
  const dispatch = useDispatch();
  const { name, IconURL } = useSelector(
    (state) => state.settings.activeCurrency
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const currencies = [
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
  ];

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelect = (selectedCurrency) => {
    const activeCurrency = currencies.find(
      (currency) => currency.name === selectedCurrency
    );
    setIsExpanded(false);
    dispatch(changeCurrency(activeCurrency));
  };

  return (
    <CurrencyWrapper>
      <SelectedWrapper onClick={handleClick}>
        <Img src={IconURL} alt={`${name} symbol`} />
        <div>{name.toUpperCase()}</div>
        {isExpanded ? <UpGreenCaret /> : <DownGreenCaret />}
      </SelectedWrapper>
      <DropdownWrapper>
        {isExpanded &&
          currencies.map((currency) => {
            return (
              <DropdownItem
                key={currency.name}
                symbol={currency.IconURL}
                currency={currency.name}
                handleClick={handleSelect}
              />
            );
          })}
      </DropdownWrapper>
    </CurrencyWrapper>
  );
}

export default CurrencyToggler;
