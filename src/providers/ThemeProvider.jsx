import React from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import zeroGrauTheme from "../assets/styles/themes/zeroGrau";
import Background from "../components/Background";

const ThemeProvider = ({ children, ...props }) => {
  const theme = zeroGrauTheme;

  return (
    
    <ScThemeProvider theme={theme} {...props}>
      <Background>
        {children}
      </Background>
    </ScThemeProvider>
  );
};

export default ThemeProvider;
