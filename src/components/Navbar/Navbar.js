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
function Navbar(props) {
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

          <CurrencyToggler
          // toggleActiveCurrency={props.toggleActiveCurrency}
          // currency={props.currency}
          />

          <ThemeButtonContainer>
            <ThemeChangeButton
              onClick={() => dispatch(toggleTheme())}
            ></ThemeChangeButton>
          </ThemeButtonContainer>
        </RightPanel>
      </FirstRow>

      <SecondRow>
        <GlobalDataBar currency={props.currency} />
      </SecondRow>
    </NavContainer>
  );
}

export default Navbar;
