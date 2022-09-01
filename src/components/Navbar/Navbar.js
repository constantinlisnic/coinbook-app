import React from "react";
import { CurrencyToggle } from "components/CurrencyToggle";
import {
  NavContainer,
  StyledLink,
  LinksContainer,
  Input,
  InputContainer,
  IconContainer,
  ThemeIcon,
  SearchIcon,
  RightPanel,
} from "./Navbar.styles";
class Navbar extends React.Component {
  render() {
    return (
      <NavContainer>
        <LinksContainer>
          <StyledLink to="/">Coins</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </LinksContainer>
        <RightPanel>
          <InputContainer>
            <IconContainer>
              <SearchIcon />
            </IconContainer>
            <Input type="text" placeholder="Search..." />
          </InputContainer>

          <CurrencyToggle />

          <IconContainer>
            <ThemeIcon onClick={this.props.toggleTheme}></ThemeIcon>
          </IconContainer>
        </RightPanel>
      </NavContainer>
    );
  }
}

export default Navbar;
