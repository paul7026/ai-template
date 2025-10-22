import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/nextjs";
import { theme } from "../src/app/providers/ThemeProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
