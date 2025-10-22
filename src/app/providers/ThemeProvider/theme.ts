"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#002D5B",
      dark: "#001A3A",
      light: "#004A7C",
    },
    secondary: {
      main: "#F5F5F5",
      dark: "#E0E0E0",
      light: "#FAFAFA",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
  },
});
