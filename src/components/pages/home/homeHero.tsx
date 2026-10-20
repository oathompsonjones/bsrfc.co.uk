"use client";

import { ArrowForward, Place } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import firstXv from "assets/images/1st-xv-26-27.jpg";

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
                minHeight: { md: "min(44rem, 76svh)", xs: "38rem" },
                mt: -2,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Image
                alt="BSRFC first XV, 2026–27 season"
                fill
                priority
                sizes="100vw"
                src={firstXv}
                style={{ objectFit: "cover", objectPosition: "center 38%" }}
            />
            <Box
                aria-hidden="true"
                sx={{
                    background: heroOverlay,
                    inset: 0,
                    pointerEvents: "none",
                    position: "absolute",
                }}
            />
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
                        sx={{
                            color: "common.white",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            letterSpacing: "0.18em",
                        }}
                        variant="overline"
                    >
                        BISHOP&apos;S STORTFORD RUGBY FOOTBALL CLUB
                    </Typography>
                </Stack>
                <Typography
                    component="h1"
                    sx={{
                        color: "common.white",
                        fontSize: { md: "clamp(4rem, 7.5vw, 6.5rem)", xs: "clamp(3.2rem, 13vw, 4.5rem)" },
                        fontWeight: 800,
                        letterSpacing: "-0.055em",
                        lineHeight: 0.98,
                        maxWidth: "14ch",
                    }}
                    variant="h1"
                >
                    One club.
                    <br />
                    One community.
                </Typography>
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
            <Box
                sx={{
                    borderLeft: `2px solid ${theme.palette.tertiary.main}`,
                    bottom: 2.5,
                    display: { md: "block", xs: "none" },
                    p: 2,
                    position: "absolute",
                    right: "max(3rem, calc((100vw - 70rem) / 2))",
                    zIndex: 1,
                }}
            >
                <Typography
                    sx={{ color: "common.white", fontSize: "0.7rem", letterSpacing: "0.16em" }}
                    variant="overline"
                >
                    FIRST XV
                </Typography>
                <Typography sx={{ color: "common.white", fontWeight: 700 }} variant="h6">
                    2026 / 27
                </Typography>
            </Box>
        </Box>
    );
}
