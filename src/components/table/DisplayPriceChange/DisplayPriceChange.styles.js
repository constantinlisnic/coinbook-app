import styled from "styled-components";

export const PriceChangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(props) =>
    props.priceChange > 0 ? props.theme.green : props.theme.red};
`;
