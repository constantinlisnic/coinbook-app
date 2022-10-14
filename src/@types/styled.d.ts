// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    secondary: string;
    color: string;
    componentBackground: string;
    themeIcon: string;
    searchIcon: string;
    exchangeIcon: string;
    stackIcon: string;
    linkIcon: string;
    cellBorderColor: string;
    red: string;
    green: string;
    bar: string;
    blueBar: string;
    progress: string;
    blueProgress: string;
    barBorder: string;
    barTextLeft: string;
    barTextRight: string;
    secondaryText: string;
    blue: string;
  }
}
