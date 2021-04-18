import { createGlobalStyle } from "styled-components";
import { variables } from "../utilities/variables";
import darkImage from "../images/bg-desktop-dark.jpg";
import lightImage from "../images/bg-desktop-light.jpg";
import mobileDark from "../images/bg-mobile-dark.jpg";
import mobileLight from "../images/bg-mobile-light.jpg";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
  }
  
  body {
    background-image: url(${(props) =>
      props.DarkMode ? darkImage : lightImage});

    @media (max-width: 768px) {
      background-image: url(${(props) =>
        props.DarkMode ? mobileDark : mobileLight});
    }

    transition: background 0.5s;
    background-repeat: no-repeat, no-repeat;
    background-size: 100% 20rem;
    background-position: left top, right top;
    background-color: ${(props) =>
      props.DarkMode
        ? variables.dark.VeryDarkBlue
        : variables.light.VeryLightGrayishBlue} !important;
`;

export default GlobalStyle;
