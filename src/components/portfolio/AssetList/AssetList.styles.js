import styled from "styled-components";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 12px;
`;

export const CoinIMG = styled.img`
  width: 60px;
`;

export const CoinNameWrapper = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 12px;
  width: 220px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 18px;
`;

export const DataWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 225px;
`;

export const DeleteIcon = styled(XCircleIcon)`
  padding-top: 20px;
  width: 25px;
  color: ${(props) => props.theme.secondaryText};
  cursor: pointer;
`;

export const EmptyPortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrongDateWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  width: 953px;
  height: 110px;
  border-radius: 12px;
`;
