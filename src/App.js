import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinPage, CoinList, Portfolio } from "pages";
import { Navbar } from "components";
import { lightTheme, darkTheme, GlobalStyle } from "styles";

function App() {
  const [themeIsLight, setThemeIsLight] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState({
    name: "usd",
    symbol: "$",
    IconURL: "https://i.ibb.co/YkKkc6J/dollar-icon.png",
  });

  const toggleTheme = () => setThemeIsLight(!themeIsLight);
  const toggleActiveCurrency = (activeCurrency) =>
    setActiveCurrency(activeCurrency);

  return (
    <ThemeProvider theme={themeIsLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Navbar
          toggleTheme={toggleTheme}
          toggleActiveCurrency={toggleActiveCurrency}
          currency={activeCurrency}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <CoinList {...props} currency={activeCurrency} />
            )}
          />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/coin/:coinId"
            render={(props) => (
              <CoinPage {...props} currency={activeCurrency} />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
