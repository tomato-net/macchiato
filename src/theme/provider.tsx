import {themes} from "./theme";
import {ThemeContext} from "./context";
import {CssBaseline, ThemeProvider as MThemeProvider} from '@mui/material';

export const ThemeProvider: React.FC<React.PropsWithChildren> = props => {
   const theme = themes.light;

   return (
       <ThemeContext.Provider value={{theme}}>
           <MThemeProvider theme={theme}>
               <CssBaseline />
               {props.children}
           </MThemeProvider>
       </ThemeContext.Provider>
   )
}