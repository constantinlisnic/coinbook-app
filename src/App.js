import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinPage, CoinList, Portfolio } from "pages";
import { Navbar } from "components";
import { lightTheme, darkTheme, GlobalStyle } from "styles";

function App() {
  const themeIsLight = useSelector((state) => state.settings.themeIsLight);

  return (
    <ThemeProvider theme={themeIsLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CoinList} />
          <Route exact path="/coin/:coinId" component={CoinPage} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
