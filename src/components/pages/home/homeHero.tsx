"use client";

import { ArrowForward, Place } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { HeroImage } from "./heroImage";
import Link from "next/link";
import type { ReactNode } from "react";
import { RotatingText } from "./rotatingText";

/**
 * The first XV image hero on the homepage.
 * @returns The homepage hero.
 */
export function HomeHero(): ReactNode {
    const theme = useTheme();
    const heroOverlay = [
        `linear-gradient(90deg, ${alpha(theme.palette.common.black, 0.88)} 0%,`,
        `${alpha(theme.palette.common.black, 0.6)} 43%,`,
        `${alpha(theme.palette.common.black, 0.07)} 100%),`,
        `linear-gradient(0deg, ${alpha(theme.palette.common.black, 0.42)}, transparent 58%)`,
    ].join(" ");

    return (
        <Box
            className="edge"
            component="section"
            sx={{
                alignItems: "flex-end",
                bgcolor: theme.palette.common.black,
                color: "common.white",
                display: "flex",
                // Fills the viewport below the header (166px) and nav (64px, or 56px on the smallest screens).
                minHeight: { sm: "calc(100svh - 230px)", xs: "calc(100svh - 222px)" },
                mt: -2,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <HeroImage />
            <Box sx={{ background: heroOverlay, inset: 0, pointerEvents: "none", position: "absolute" }} />
            <Box
                sx={{
                    maxWidth: "70rem",
                    mx: "auto",
                    pb: { md: 10, xs: 7 },
                    position: "relative",
                    px: { md: 5, xs: 3 },
                    width: "100%",
                    zIndex: 1,
                }}
            >
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", mb: 2.5 }}>
                    <Box sx={{ bgcolor: theme.palette.tertiary.main, height: 2, width: 32 }} />
                    <Typography
                        component="p"
                        sx={{ color: "common.white", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em" }}
                        variant="overline"
                    >
                        BISHOP&apos;S STORTFORD RUGBY FOOTBALL CLUB
                    </Typography>
                </Stack>

                <RotatingText />

                <Typography
                    sx={{
                        color: alpha(theme.palette.common.white, 0.88),
                        fontSize: { md: "1.2rem", xs: "1rem" },
                        lineHeight: 1.7,
                        maxWidth: "34rem",
                        mt: 3,
                    }}
                    variant="body1"
                >
                    Rugby for every age and ability. Find your team, meet your community and be part of
                    BSRFC.
                </Typography>

                <Stack direction={{ sm: "row", xs: "column" }} spacing={1.5} sx={{ mt: 4, width: "fit-content" }}>
                    <Button
                        component={Link}
                        endIcon={<ArrowForward />}
                        href="/teams"
                        sx={{
                            bgcolor: theme.palette.tertiary.main,
                            color: "common.white",
                            fontWeight: 700,
                            px: 3,
                            py: 1.5,
                        }}
                    >
                        Explore our teams
                    </Button>
                    <Button
                        component={Link}
                        endIcon={<Place />}
                        href="/find-us"
                        sx={{
                            border: `1px solid ${alpha(theme.palette.common.white, 0.65)}`,
                            color: "common.white",
                            fontWeight: 700,
                            px: 3,
                            py: 1.5,
                        }}
                    >
                        Find the club
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
