import styled from "styled-components";

export const Table = styled.table`
  color: ${(props) => props.theme.color};
  border-collapse: collapse;
  margin: auto;
`;

export const TableContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 1125px;
  margin: auto;
  padding: 30px;
`;
