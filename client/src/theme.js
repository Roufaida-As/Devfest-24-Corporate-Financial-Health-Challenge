/* eslint-disable no-unused-vars */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { Palette } from "@material-ui/icons";

// Color design tokens
export const tokens = (mode) => ({
  ...(mode === "default"
    ? {
        purple: {
          100: "#f5eef5",
          200: "#eaddea",
          300: "#e0cce0",
          400: "#d5bbd5",
          500: "#cbaacb",
          600: "#a288a2",
          700: "#7a667a",
          800: "#514451",
          900: "#292229",
        },
        green: {
          100: "#edfef4",
          200: "#dbfde9",
          300: "#c8fbde",
          400: "#b6fad3",
          500: "#a4f9c8",
          600: "#83c7a0",
          700: "#629578",
          800: "#426450",
          900: "#213228",
        },
        lightblue: {
          100: "#eaf3f7",
          200: "#d6e6f0",
          300: "#c1dae8",
          400: "#adcde1",
          500: "#98c1d9",
          600: "#7a9aae",
          700: "#5b7482",
          800: "#3d4d57",
          900: "#1e272b",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        darkblue: {
          100: "#d7dce1",
          200: "#afb9c4",
          300: "#8695a6",
          400: "#5e7289",
          500: "#364f6b",
          600: "#2b3f56",
          700: "#202f40",
          800: "#16202b",
          900: "#0b1015",
        },
      }
    : {
        // Provide an alternative object here if needed, currently empty
        purple: {},
        green: {},
        lightblue: {},
        white: {},
        darkblue: {},
      }),
});

//mui theme settings
