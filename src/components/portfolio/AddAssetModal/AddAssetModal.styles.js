import styled from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateInput = styled(DatePicker)`
  box-sizing: border-box;
  &:focus {
    outline: none;
    background: ${(props) => props.theme.componentBackground};
  }
  background: ${(props) => props.theme.main};
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 12px;
  width: 300px;
  height: 55px;
`;

export const AddAssetButton = styled.button`
  margin: 30px;
  padding: 10px 80px;
  background: ${(props) => props.theme.blue};
  border: none;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  width: 700px;
  height: 430px;
  margin: auto;
  border-radius: 15px;
  gap: 35px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 660px;
  gap: 230px;
`;

export const CloseIcon = styled(XMarkIcon)`
  color: ${(props) => props.theme.blue};
  width: 45px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  font-size: 25px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  gap: 30px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  &::placeholder {
    color: ${(props) => props.theme.secondaryText};
    font-size: 16px;
  }
  &:focus {
    outline: none;
    background: ${(props) => props.theme.componentBackground};
  }
  &:nth-of-type(2) {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  background: ${(props) => props.theme.main};
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 12px;
  width: 300px;
  height: 55px;
  margin-bottom: 25px;
`;

export const CoinWrapper = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
`;

export const ImgWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 12px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CoinNameWrapper = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const SaveButton = styled.button`
  padding: 10px 80px;
  background: ${(props) => props.theme.blue};
  border: none;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 35px;
`;

export const ResultItemContainer = styled.div`
  font-size: 15px;
  margin: auto;
  &:hover {
    background: ${(props) => props.theme.main};
  }
  &:nth-of-type(1) {
    margin-top: 10px;
  }
  &:last-of-type {
    margin-bottom: 10px;
  }
  padding: 10px;
  width: 240px;
  height: 33px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

export const ResultItemImg = styled.img`
  width: 33px;
  height: 33px;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.componentBackground};
  position: absolute;
  width: 300px;
  top: 413px;
  border-radius: 12px;
  z-index: 2;
`;

export const NewCoinIMG = styled.img`
  width: 60px;
`;
