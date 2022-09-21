import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  padding: 25px;
  width: 1185px;
  margin: 30px auto;
  border-radius: 15px;
`;
