import React from "react";
import { CurrencyToggler, GlobalDataBar } from "components";
import {
  NavContainer,
  StyledLink,
  LinksContainer,
  Input,
  InputContainer,
  ThemeButtonContainer,
  ThemeChangeButton,
  SearchIcon,
  RightPanel,
  FirstRow,
  SecondRow,
} from "./Navbar.styles";
class Navbar extends React.Component {
  render() {
    return (
      <NavContainer>
        <FirstRow>
          <LinksContainer>
            <StyledLink to="/">Coins</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
          </LinksContainer>
          <RightPanel>
            <InputContainer>
              <ThemeButtonContainer>
                <SearchIcon />
              </ThemeButtonContainer>
              <Input type="text" placeholder="Search..." />
            </InputContainer>

            <CurrencyToggler
              toggleActiveCurrency={this.props.toggleActiveCurrency}
              currency={this.props.currency}
            />

            <ThemeButtonContainer>
              <ThemeChangeButton
                onClick={this.props.toggleTheme}
              ></ThemeChangeButton>
            </ThemeButtonContainer>
          </RightPanel>
        </FirstRow>

        <SecondRow>
          <GlobalDataBar currency={this.props.currency} />
        </SecondRow>
      </NavContainer>
    );
  }
}

export default Navbar;
