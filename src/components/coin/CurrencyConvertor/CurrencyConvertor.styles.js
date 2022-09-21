import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  gap: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExchangeIcon = styled.div`
  background: url(${(props) => props.theme.exchangeIcon});
  width: 25px;
  height: 19px;
`;

export const Label = styled.label`
  color: white;
  font-size: 18px;
  box-sizing: border-box;
  background: #007ea7;
  padding: 5px;
  border-radius: 10px 0 0 10px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  width: 60px;
  text-align: center;
`;

export const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  color: ${(props) => props.theme.color};
  font-size: 18px;
  width: 250px;
  background: ${(props) => props.theme.componentBackground};
  box-sizing: border-box;
  padding: 5px;
  border: none;
  border-radius: 0 10px 10px 0;
  height: 50px;
  text-align: center;
  outline: none;
`;
