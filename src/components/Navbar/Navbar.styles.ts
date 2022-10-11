import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 107px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 20px;
  background: ${(props) => props.theme.componentBackground};
  color: ${(props) => props.theme.color};
  margin: 10px 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-left: 35px;
  gap: 10px;
`;

export const ThemeButtonContainer = styled.div`
  padding: 0 12px;
  background: ${(props) => props.theme.componentBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
`;

export const ThemeChangeButton = styled.div`
  background: url(${(props) => props.theme.themeIcon}) no-repeat;
  width: 25px;
  height: 31px;
  cursor: pointer;
`;

export const RightPanel = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 10px;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.secondary};
  width: 80vw;
  min-width: 800px;
  height: 67px;
  border-radius: 0 0 15px 15px;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  height: 40px;
  font-size: 12px;
  background: ${(props) => props.theme.secondary};
  border-radius: 0 0 15px 15px;
  width: 750px;
`;
