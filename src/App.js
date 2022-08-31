import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinPage, CoinList, Portfolio } from "pages";
import { Navbar } from "components";
import { lightTheme, darkTheme, GlobalStyle } from "styles";

class App extends React.Component {
  state = {
    themeIsLight: false,
  };

  toggleTheme = () => this.setState({ themeIsLight: !this.state.themeIsLight });

  render() {
    return (
      <ThemeProvider theme={this.state.themeIsLight ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <Navbar toggleTheme={this.toggleTheme} />
          <Switch>
            <Route exact path="/" component={CoinList} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/coin/:coinId" component={CoinPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
