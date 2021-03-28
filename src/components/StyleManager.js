import React from "react";
import { StyleSheetManager } from "styled-components";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";

export const StyleManager = ({ environment, children }) => {
  return (
    <StyleSheetManager target={environment.document.head}>
      <ThemeProvider
        theme={{ ...DEFAULT_THEME, document: environment.document }}
      >
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};
