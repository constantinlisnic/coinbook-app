import styled from "styled-components";

export const Table = styled.table`
  color: ${(props) => props.theme.color};
  border-collapse: collapse;
  margin: auto;
  font-size: 12px;
`;

export const TableContainer = styled.div`
  box-sizing: border-box;
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 1185px;
  margin: auto;
  margin-bottom: 30px;
  padding: 30px;
`;
