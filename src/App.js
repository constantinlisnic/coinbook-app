import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinPage, CoinList, Portfolio } from "pages";
import { Navbar } from "components";
import { lightTheme, darkTheme, GlobalStyle } from "styles";

class App extends React.Component {
  state = {
    themeIsLight: false,
    activeCurrency: {
      name: "usd",
      symbol: "$",
      IconURL: "https://i.ibb.co/YkKkc6J/dollar-icon.png",
    },
  };

  toggleTheme = () => this.setState({ themeIsLight: !this.state.themeIsLight });
  toggleActiveCurrency = (activeCurrency) => this.setState({ activeCurrency });

  render() {
    return (
      <ThemeProvider theme={this.state.themeIsLight ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <Navbar
            toggleTheme={this.toggleTheme}
            toggleActiveCurrency={this.toggleActiveCurrency}
            currency={this.state.activeCurrency}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <CoinList {...props} currency={this.state.activeCurrency} />
              )}
            />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route
              exact
              path="/coin/:coinId"
              render={(props) => (
                <CoinPage {...props} currency={this.state.activeCurrency} />
              )}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
