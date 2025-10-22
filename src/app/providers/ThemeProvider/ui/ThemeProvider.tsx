import { CssBaseline, ThemeProvider as ThemeProviderMui } from "@mui/material";
import { theme } from "../theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProviderMui theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMui>
  );
};
