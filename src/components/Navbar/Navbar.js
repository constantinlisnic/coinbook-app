import React from "react";
import {
  Container,
  StyledLink,
  NavLinks,
  Input,
  InputContainer,
  IconContainer,
  ThemeIcon,
  SearchIcon,
} from "./Navbar.styles";

function Navbar(props) {
  return (
    <Container>
      <NavLinks>
        <StyledLink to="/">Coins</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </NavLinks>
      <InputContainer>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <Input type="text" placeholder="Search..." />
      </InputContainer>
      <div>
        <select>
          <option value="USD">USD</option>
        </select>
      </div>
      <IconContainer>
        <ThemeIcon onClick={props.toggleTheme}></ThemeIcon>
      </IconContainer>
    </Container>
  );
}

export default Navbar;
