import styled from "styled-components";

export const BarChartContainer = styled.div`
  width: 510px;
  background: ${(props) => props.theme.secondary};
  padding: 30px;
  border-radius: 15px;
`;

export const BarChartTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0e7336;
`;

export const VolumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
`;

export const BTCSpan = styled.span`
  font-size: 30px;
`;

export const Volume = styled.div`
  font-size: 26px;
`;
