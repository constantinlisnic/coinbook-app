import styled from "styled-components";

interface PriceChangeContainerProps {
  priceChange: number;
}

export const PriceChangeContainer = styled.div<PriceChangeContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(props) =>
    props.priceChange > 0 ? props.theme.green : props.theme.red};
`;
