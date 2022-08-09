import {createTheme, Theme} from "@mui/material";

export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
    }
})

export const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
    }
})

type Themes = {
   light: Theme;
   dark: Theme;
}

export const themes: Themes = {
    light: lightTheme,
    dark: darkTheme,
}
