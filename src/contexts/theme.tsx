"use client";

import {
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
    createTheme,
    darken,
    responsiveFontSizes,
} from "@mui/material";
import DefaultPropsProvider from "@mui/material/DefaultPropsProvider";
import type { ReactNode } from "react";

const BLUE = "#003ca5";
const PINK = "#e01583";
const WHITE = "#ffffff";
const BLACK = "#121212";

/**
 * Provides the theme to the application.
 * @param props - The properties of the component.
 * @param props.children - The children to render.
 * @returns The theme provider to wrap the application in.
 */
export function ThemeContextProvider({ children }: { readonly children: ReactNode; }): ReactNode {
    // Create the full theme.
    const basePalette = {
        common: { black: BLACK, white: WHITE },
        primary: { main: BLUE },
        secondary: { main: PINK },
    };
    const theme = responsiveFontSizes(createTheme({
        components: {
            MuiButton: { styleOverrides: { root: { borderRadius: "0" } } },
            MuiButtonGroup: {
                styleOverrides: {
                    root: {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        "& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton": { borderColor: "transparent" },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        "& .MuiTypography-root": { color: "inherit" },
                        color: basePalette.primary.main,
                    },
                },
            },
            MuiContainer: { styleOverrides: { root: { padding: "0" } } },
            MuiDivider: { styleOverrides: { root: { borderColor: "lightgray", margin: "1.25% 0" } } },
            MuiInputBase: { styleOverrides: { root: { borderRadius: "1rem 1rem 0 0 !important" } } },
            MuiMenuItem: { styleOverrides: { root: { borderRadius: "0" } } },
            MuiPaper: {
                styleOverrides: {
                    root: { transition: "background-color 0.25s linear" },
                    rounded: { borderRadius: "0" },
                },
            },
            MuiSkeleton: { styleOverrides: { root: { borderRadius: "0" } } },
        },
        cssVariables: { colorSchemeSelector: "class" },
        palette: {
            background: {
                default: basePalette.primary.main,
                paper: darken(basePalette.primary.main, 0.4),
            },
            text: {
                primary: basePalette.common.white,
                secondary: basePalette.common.white,
            },
            ...basePalette,
        },
        typography: (palette) => ({
            ...Object.fromEntries([
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "subtitle1",
                "subtitle2",
                "body1",
                "body2",
                "caption",
                "button",
                "overline",
            ].map((key) => [key, { color: palette.common.white }])),
            h1: { fontSize: "2.5rem" },
            h2: { fontSize: "2rem" },
            h3: { fontSize: "1.75rem" },
            h4: { fontSize: "1.5rem" },
            h5: { fontSize: "1.25rem" },
            h6: { fontSize: "1.1rem" },
        }),
        zIndex: { appBar: 10, fab: 10 },
    }), { breakpoints: ["xs", "sm", "md", "lg", "xl"] });

    return (
        /** Injects MUI styles before anything else. */
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <DefaultPropsProvider value={{
                    MuiButton: { variant: "contained" },
                    MuiDivider: { variant: "middle" },
                    MuiFab: { color: "secondary" },
                    MuiPaper: { elevation: 5 },
                    MuiTextField: { fullWidth: true, required: true, variant: "filled" },
                }}
                >
                    <CssBaseline enableColorScheme />
                    {children}
                </DefaultPropsProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
