"use client";

import { Box, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import type { ReactNode } from "react";
import firstXv from "assets/images/1st-xv-26-27.jpg";

/**
 * A compact image-led introduction to the club's teams.
 * @returns The teams page hero.
 */
export function TeamsHero(): ReactNode {
    const { palette } = useTheme();
    const heroOverlay = [
        `linear-gradient(90deg, ${alpha(palette.common.black, 0.88)} 0%,`,
        `${alpha(palette.common.black, 0.64)} 52%,`,
        `${alpha(palette.common.black, 0.18)} 100%)`,
    ].join(" ");

    return (
        <Box
            className="edge"
            component="section"
            sx={{
                alignItems: "center",
                display: "flex",
                minHeight: { md: "22rem", xs: "20rem" },
                mt: -2,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Image
                alt="Bishop's Stortford RFC first XV, 2026–27 season"
                fill
                priority
                sizes="100vw"
                src={firstXv}
                style={{ objectFit: "cover", objectPosition: "center 38%" }}
            />
            <Box sx={{ background: heroOverlay, inset: 0, position: "absolute" }} />
            <Stack
                spacing={1}
                sx={{
                    maxWidth: "70rem",
                    mx: "auto",
                    position: "relative",
                    px: { md: 5, xs: 3 },
                    width: "100%",
                    zIndex: 1,
                }}
            >
                <Typography
                    component="p"
                    sx={{ color: "secondary.main" }}
                    variant="overline"
                >
                    #ONECLUB
                </Typography>
                <Typography
                    component="h1"
                    sx={{
                        color: "common.white",
                        fontSize: { md: "clamp(3rem, 6vw, 5rem)", xs: "clamp(2.75rem, 12vw, 3.5rem)" },
                    }}
                    variant="heroTitle"
                >
                    Our Teams
                </Typography>
                <Typography
                    sx={{ color: "lightgrey", maxWidth: "40rem", pt: 1 }}
                    variant="body1"
                >
                    From first steps on the pitch to senior rugby, there&apos;s a place for everyone at Bishop&apos;s
                    Stortford.
                </Typography>
            </Stack>
        </Box>
    );
}
