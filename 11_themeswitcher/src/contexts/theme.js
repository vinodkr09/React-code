// This is the production grade code of "context" that all importing is done in single file
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// wecan also export custom hooks here like this
export default function useTheme(){
    return useContext(ThemeContext)
}