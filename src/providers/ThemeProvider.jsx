import React from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import themeEvent from "../assets/styles/themes/sicc";
import Background from "../components/Background";

const ThemeProvider = ({ children, ...props }) => {
  const theme = themeEvent;

  return (
    
    <ScThemeProvider theme={theme} {...props}>
      <Background>
        {children}
      </Background>
    </ScThemeProvider>
  );
};

export default ThemeProvider;
