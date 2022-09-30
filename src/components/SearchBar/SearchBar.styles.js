import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  &:visited {
    color: ${(props) => props.theme.color};
  }
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;

export const Container = styled.div`
  background: ${(props) => props.theme.componentBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 10px 0;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.componentBackground};
  position: absolute;
  width: 277px;
  top: 66px;
  border-radius: 12px;
`;

export const Input = styled.input`
  &::placeholder {
    color: ${(props) => props.theme.color};
    font-size: 18px;
  }
  &:focus {
    outline: none;
  }
  background: ${(props) => props.theme.componentBackground};
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 18px;
`;

export const SearchIconContainer = styled.div`
  padding: 0 12px;
  background: ${(props) => props.theme.componentBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
`;

export const SearchIcon = styled.div`
  background: url(${(props) => props.theme.searchIcon}) no-repeat;
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
`;

export const ResultItemContainer = styled.div`
  font-size: 15px;
  margin: auto;
  &:hover {
    background: ${(props) => props.theme.main};
  }
  &:nth-of-type(1) {
    margin-top: 10px;
  }
  &:last-of-type {
    margin-bottom: 10px;
  }
  padding: 10px;
  width: 240px;
  height: 33px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 33px;
  height: 33px;
`;
