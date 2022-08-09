import React from "react";
import {themes} from "./theme";
import {Theme} from "@mui/material";

export type ThemeContextProps = {
   theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContextProps>({ theme: themes.dark })

export const useTheme = () => React.useContext(ThemeContext)