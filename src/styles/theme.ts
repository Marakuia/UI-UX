import { createGlobalStyle } from "styled-components";

export const BaseTheme = {
  backgroundColor: "#ADD8E6",
  backgroundImage: "url(/Clouds.svg)",
  textColor: "black",
  infoIconColor: "#39a0fa",
  iconColor: "#0776ba",
  accentColor1: "rgb(9, 123, 176)",
  accentColor2: "#00c6ff",
  shadowColor: "rgba(0,0,0,0.5)",

  textSizeTitle: "200px",
  textSizeText: "1000px",

  borderRadius: "15px",
};


export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Kalam';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: ${(props) => props.theme.backgroundImage};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
