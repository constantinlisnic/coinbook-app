import styled from "styled-components";

export const Img = styled.img`
  width: 34px;
`;

export const Tr = styled.tr`
  ${
    "" /* &:last-of-type {
    background: gray;
  } */
  }
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.cellBorderColor};
`;

export const AboveBarText = styled.div`
  display: flex;
  justify-content: space-between;
`;
