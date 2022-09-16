import styled from "styled-components";

export const LineChartContainer = styled.div`
  width: 516px;
  background: ${(props) => props.theme.secondary};
  padding: 30px;
  border-radius: 15px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
`;

export const BTCSpan = styled.span`
  font-size: 30px;
`;

export const Price = styled.div`
  font-size: 30px;
`;

export const LineChartTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0e7336;
`;
