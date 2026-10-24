"use client";

import { ArrowForward, Place } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { HeroImage } from "./heroImage";
import Link from "next/link";
import type { ReactNode } from "react";
import { RotatingText } from "./rotatingText";

const intervalMs = 5000;
const transitionMs = 1500;
const transition = `transform ${transitionMs}ms ease`;

/**
 * The first XV image hero on the homepage.
 * @returns The homepage hero.
 */
export function HomeHero(): ReactNode {
    const { palette } = useTheme();
    const heroOverlay = [
        `linear-gradient(90deg, ${alpha(palette.common.black, 0.88)} 0%,`,
        `${alpha(palette.common.black, 0.6)} 43%,`,
        `${alpha(palette.common.black, 0.07)} 100%),`,
        `linear-gradient(0deg, ${alpha(palette.common.black, 0.42)}, transparent 58%)`,
    ].join(" ");

    const [tick, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTick((previous) => previous + 1);
        }, intervalMs + transitionMs);

        return (): void => clearInterval(interval);
    }, []);

    return (
        <Box
            className="edge"
            component="section"
            sx={{
                alignItems: "flex-end",
                color: "common.white",
                display: "flex",
                // Fills the viewport below the header (166px) and nav (64px, or 56px on the smallest screens).
                minHeight: { sm: "calc(100svh - 230px)", xs: "calc(100svh - 222px)" },
                mt: -2,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <HeroImage tick={tick} transition={transition} />
            <Box sx={{ background: heroOverlay, inset: 0, pointerEvents: "none", position: "absolute" }} />
            <Box
                sx={{
                    m: "auto",
                    maxWidth: "70rem",
                    position: "relative",
                    px: { md: 5, xs: 3 },
                    width: "100%",
                    zIndex: 1,
                }}
            >
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", mb: 2.5 }}>
                    <Box sx={{ bgcolor: "secondary.main", height: 2, width: 32 }} />
                    <Typography
                        component="p"
                        sx={{ color: "common.white" }}
                        variant="overline"
                    >
                        BISHOP&apos;S STORTFORD RUGBY FOOTBALL CLUB
                    </Typography>
                </Stack>

                <RotatingText tick={tick} transition={transition} />

                <Typography
                    sx={{ color: "lightgrey", maxWidth: "34rem", mt: 3 }}
                    variant="pageIntro"
                >
                    Rugby for every age and ability. Find your team, meet your community and be part of
                    BSRFC.
                </Typography>

                <Stack direction={{ sm: "row", xs: "column" }} spacing={1.5} sx={{ mt: 4, width: "fit-content" }}>
                    <Button
                        color="secondary"
                        component={Link}
                        endIcon={<ArrowForward />}
                        href="/teams"
                        sx={{
                            color: "common.white",
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
                            border: "1px solid lightgrey",
                            color: "common.white",
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
