"use client";

import { ArrowForward, Place } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Hero } from "components/hero";
import type { HeroBackgroundImage } from "components/heroBackground";
import Link from "next/link";
import type { ReactNode } from "react";
import { clubWords } from "components/rotatingWords";
import firstXv from "assets/images/1st-xv-26-27.jpg";
import huddle from "assets/images/1st-xv-huddle.jpg";
import kitShowcase from "assets/images/kit-showcase.jpg";
import leeds from "assets/images/1st-xv-leeds.jpg";
import leicester from "assets/images/1st-xv-leicester.jpg";
import rams from "assets/images/1st-xv-rams.jpg";

const slides: HeroBackgroundImage[] = [
    { alt: "BSRFC first XV, 2026–27 season", image: firstXv, subtitle: "2026 / 27", title: "FIRST XV" },
    { alt: "BSRFC first XV in a huddle", image: huddle, subtitle: "The huddle", title: "FIRST XV" },
    { alt: "BSRFC first XV playing Leeds", image: leeds, subtitle: "Match day", title: "FIRST XV" },
    { alt: "BSRFC first XV celebrating", image: leicester, subtitle: "Celebration", title: "FIRST XV" },
    { alt: "BSRFC first XV playing Rams", image: rams, subtitle: "On the attack", title: "FIRST XV" },
    { alt: "BSRFC 2026–27 kit", image: kitShowcase, subtitle: "2026 / 27", title: "NEW KIT" },
];

const overlay = [
    "linear-gradient(90deg, rgb(18 18 18 / 88%) 0%,",
    "rgb(18 18 18 / 60%) 43%,",
    "rgb(18 18 18 / 7%) 100%),",
    "linear-gradient(0deg, rgb(18 18 18 / 42%), transparent 58%)",
].join(" ");

/**
 * Displays the homepage's large, image-led hero.
 * @returns The homepage hero.
 */
export function HomeHero(): ReactNode {
    return (
        <Hero
            contentSpacing={0}
            images={slides}
            intro="Rugby for every age and ability. Find your team, meet your community and be part of BSRFC."
            large
            overlay={overlay}
            overline="Bishop's Stortford Rugby Football Club"
            rotatingTitle={{
                letterSpacing: "-0.055em",
                lineHeight: 0.98,
                maxWidth: "14ch",
                prefix: "One",
                words: clubWords,
            }}
        >
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
        </Hero>
    );
}
