import styled from "styled-components";

export const CurrencyWrapper = styled.div`
  display: flex;
`;

export const SelectedWrapper = styled.div`
  background: ${(props) => props.theme.componentBackground};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 108px;
  border-radius: 12px;
  margin: 10px 0;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 33px;
  height: 33px;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.componentBackground};
  position: absolute;
  width: 108px;
  top: 66px;
  border-radius: 12px;
`;
export const DropdownItemContainer = styled.div`
  &:hover {
    background: ${(props) => props.theme.main};
  }
  &:nth-of-type(1) {
    margin-top: 5px;
  }
  &:nth-of-type(3) {
    margin-bottom: 5px;
  }
  padding: 5px;
  width: 80px;
  height: 33px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 5px;
`;
