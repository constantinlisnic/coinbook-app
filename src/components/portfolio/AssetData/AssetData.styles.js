import styled from "styled-components";
import { WalletIcon } from "@heroicons/react/24/outline";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  width: 953px;
  height: 110px;
  border-radius: 12px;
`;

export const DataWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  font-size: 14px;
  width: 863px;
`;

export const DataName = styled.span`
  color: ${(props) => props.theme.secondaryText};
`;

export const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 90px;
  background: ${(props) => props.theme.secondary};
  border-radius: 12px 0 0 12px;
  font-size: 15px;
  gap: 10px;
  border-right: solid 3px ${(props) => props.theme.main};
`;

export const StyledWallet = styled(WalletIcon)`
  width: 25px;
`;

export const ChangeSincePurchase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const GainLoss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ChangedValueDiv = styled.div`
  color: black;
  background: ${(props) =>
    props.priceChange > 0 ? props.theme.green : props.theme.red};
  padding: 4px 12px;
  border-radius: 12px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const NumberWrapper = styled.div`
  background: ${(props) => props.theme.componentBackground};
  padding: 4px 12px;
  border-radius: 12px;
`;
