import styled from "styled-components";

export const LoadingContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 576px;
  height: 389px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 1185px;
`;
