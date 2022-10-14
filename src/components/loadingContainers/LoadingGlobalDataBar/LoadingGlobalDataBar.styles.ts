import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.secondary};
  border-radius: 0 0 15px 15px;
  width: 40vw;
  min-width: 700px;
`;
