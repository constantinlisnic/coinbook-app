import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 350px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
