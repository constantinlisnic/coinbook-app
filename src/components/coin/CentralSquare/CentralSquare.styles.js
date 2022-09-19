import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 350px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const PriceDiv = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const Change24h = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  padding: 12px 30px;
`;

export const AllTimeDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const AllTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 15px;
`;

export const StyledSpan = styled.span`
  font-size: 15px;
`;

export const AllTimeDate = styled.div`
  font-size: 13px;
  color: #adaaa8;
  padding-left: 20px;
`;

export const ChangedValueDiv = styled.div`
  color: black;
  background: ${(props) =>
    props.priceChange > 0 ? props.theme.green : props.theme.red};
  border-radius: 8px;
  padding: 0 5px;
`;

export const GainLoss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
