import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Poppins', sans-serif;}
body {
    margin:0;
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items:center;
}

`;
export default GlobalStyle;
