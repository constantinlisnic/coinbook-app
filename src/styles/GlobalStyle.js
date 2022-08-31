import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Poppins";
  src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
}

body {
    margin:0;
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.color};
    font-family : "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    align-items:center;
}
`;
export default GlobalStyle;
