import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.color["base-background"]};
    color: ${(props) => props.theme.color["base-text"]};

    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: ${(props) => props.theme.font["font-family"]["nunito"]};
    font-size: ${(props) => props.theme.font["font-size"]["textM"]};
    line-height: 160%;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;