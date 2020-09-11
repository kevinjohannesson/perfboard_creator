import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import { themeCreator } from './base';
import { ThemeName } from './types';

interface ContextValue {
  currentTheme: ThemeName,
  setTheme: (themeName: ThemeName) => void,
}
const initialValue: ContextValue = {
  currentTheme: 'light', 
  setTheme: (themeName: ThemeName) => {}
}
export const ThemeContext = React.createContext<ContextValue>(initialValue);

const ThemeProvider: React.FC = (props) => {
    // Read current theme from localStorage or maybe from an api
    const currentThemeName: ThemeName = localStorage.getItem("appTheme") as ThemeName || initialValue.currentTheme;

    // State to hold the selected theme name
    const [themeName, set_themeName] = useState(currentThemeName);

    // Get the theme object by theme name
    const theme = themeCreator(themeName);

    const setTheme = (themeName: ThemeName): void => {
      localStorage.setItem("appTheme", themeName);
      set_themeName(themeName);
    }

    const contextValue = {
      currentTheme: themeName,
      setTheme,  
    }

    return (
      <ThemeContext.Provider value={contextValue}>
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;