import { CurrencyToggler, GlobalDataBar } from "components";
import { useDispatch } from "react-redux";
import { toggleTheme } from "store/settingsSlice";

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
function Navbar() {
  const dispatch = useDispatch();

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

          <CurrencyToggler />

          <ThemeButtonContainer>
            <ThemeChangeButton
              onClick={() => dispatch(toggleTheme())}
            ></ThemeChangeButton>
          </ThemeButtonContainer>
        </RightPanel>
      </FirstRow>

      <SecondRow>
        <GlobalDataBar />
      </SecondRow>
    </NavContainer>
  );
}

export default Navbar;
