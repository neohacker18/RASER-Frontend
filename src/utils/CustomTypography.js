import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import customTheme from '@mui/material/styles'
const customTheme = createTheme({
  typography: {
    h1: {
      background:
        "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
});

export default function CustomTypography() {
  return (
    <CssVarsProvider theme={customTheme}>
      <Box sx={(theme) => theme.typography.h1}>text</Box>
    </CssVarsProvider>
  );
}
