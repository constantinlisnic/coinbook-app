import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 30px auto;
  margin-top: 0;
  border-radius: 15px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.componentBackground};
  background: ${(props) => props.selected && "rgba(0, 126, 167, 0.5)"};
  color: ${(props) => props.theme.color};
  color: ${(props) => props.selected && "white"};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
`;
