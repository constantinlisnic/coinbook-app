import styled from "styled-components";

export const Table = styled.table`
  color: ${(props) => props.theme.color};
  border-collapse: collapse;
`;

export const TableContainer = styled.table`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  padding: 30px;
`;
