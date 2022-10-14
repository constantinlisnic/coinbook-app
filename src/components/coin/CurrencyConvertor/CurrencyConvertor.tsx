import { useState, useEffect } from "react";
import { useAppSelector } from "hooks";
import { IndividualCoinProps as Props } from "IndividualCoinProps";
import {
  Container,
  InputWrapper,
  ExchangeIcon,
  Label,
  Input,
} from "./CurrencyConvertor.styles";

function CurrencyConvertor(props: Props) {
  const { current_price } = props.market_data;
  const { name: currencyName } = useAppSelector(
    (state) => state.settings.activeCurrency
  );
  const [currencyValue, setCurrencyValue] = useState(
    current_price[currencyName as keyof typeof current_price]
  );
  const [cryptoValue, setCryptoValue] = useState(1);

  const handleChangeCurrency = (e: any) => {
    const cryptoInput = (
      e.target.value / current_price[currencyName as keyof typeof current_price]
    ).toFixed(5);
    setCurrencyValue(e.target.value);
    setCryptoValue(Number(cryptoInput));
  };

  const handleChangeCrypto = (e: any) => {
    const currencyInput = (
      e.target.value * current_price[currencyName as keyof typeof current_price]
    ).toFixed(3);
    setCryptoValue(e.target.value);
    setCurrencyValue(Number(currencyInput));
  };

  useEffect(() => {
    setCurrencyValue(current_price[currencyName as keyof typeof current_price]);
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
          <div>{props.symbol.toUpperCase()}</div>
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
