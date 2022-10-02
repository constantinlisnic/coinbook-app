import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${(props) => props.theme.secondary};
  padding: 25px 40px 50px;
  width: 1185px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 15px;
`;

export const DescriptionDiv = styled.div`
  a {
    color: #007ea7;
    text-decoration: none;
  }
  color: ${(props) => props.theme.secondaryText};
  text-align: center;
`;

export const StackIcon = styled.div`
  background: url(${(props) => props.theme.stackIcon});
  width: 22px;
  height: 22px;
`;
