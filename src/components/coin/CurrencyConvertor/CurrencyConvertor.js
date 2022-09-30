import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  InputWrapper,
  ExchangeIcon,
  Label,
  Input,
} from "./CurrencyConvertor.styles";

function CurrencyConvertor(props) {
  const { name: currencyName } = useSelector(
    (state) => state.settings.activeCurrency
  );
  const [currencyValue, setCurrencyValue] = useState(
    props.coinData.market_data.current_price[currencyName]
  );
  const [cryptoValue, setCryptoValue] = useState(1);

  const handleChangeCurrency = (e) => {
    const { current_price } = props.coinData.market_data;
    const cryptoInput = (e.target.value / current_price[currencyName]).toFixed(
      5
    );
    setCurrencyValue(e.target.value);
    setCryptoValue(cryptoInput);
  };

  const handleChangeCrypto = (e) => {
    const { current_price } = props.coinData.market_data;
    const currencyInput = (
      e.target.value * current_price[currencyName]
    ).toFixed(3);
    setCryptoValue(e.target.value);
    setCurrencyValue(currencyInput);
  };

  useEffect(() => {
    const { current_price } = props.coinData.market_data;
    setCurrencyValue(current_price[currencyName]);
    setCryptoValue(1);
    // eslint-disable-next-line
  }, [currencyName]);

  return (
    <Container>
      <div>
        <InputWrapper>
          <Label htmlFor="currencyInput">
            <div>{currencyName.toUpperCase()}</div>
          </Label>
          <Input
            id="currencyInput"
            type="number"
            value={currencyValue}
            onChange={handleChangeCurrency}
          />
        </InputWrapper>
      </div>
      <ExchangeIcon />
      <InputWrapper>
        <Label htmlFor="cryptoInput">
          <div>{props.coinData.symbol.toUpperCase()}</div>
        </Label>
        <Input
          id="cryptoInput"
          type="number"
          value={cryptoValue}
          onChange={handleChangeCrypto}
        />
      </InputWrapper>
    </Container>
  );
}

export default CurrencyConvertor;
