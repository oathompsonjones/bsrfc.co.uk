"use client";

import { Box, Typography } from "@mui/material";
import { heroIntervalMs, heroTransition } from "./heroTiming";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import firstXv from "assets/images/1st-xv-26-27.jpg";
import huddle from "assets/images/1st-xv-huddle.jpg";
import kitShowcase from "assets/images/kit-showcase.jpg";
import leeds from "assets/images/1st-xv-leeds.jpg";
import leicester from "assets/images/1st-xv-leicester.jpg";
import rams from "assets/images/1st-xv-rams.jpg";
import { useTheme } from "@mui/material/styles";

const slides = [
    { alt: "BSRFC first XV, 2026–27 season", image: firstXv, subtitle: "2026 / 27", title: "FIRST XV" },
    { alt: "BSRFC first XV in a huddle", image: huddle, subtitle: "The huddle", title: "FIRST XV" },
    { alt: "BSRFC first XV playing Leeds", image: leeds, subtitle: "Match day", title: "FIRST XV" },
    { alt: "BSRFC first XV celebrating", image: leicester, subtitle: "Celebration", title: "FIRST XV" },
    { alt: "BSRFC first XV playing Rams", image: rams, subtitle: "On the attack", title: "FIRST XV" },
    { alt: "BSRFC 2026–27 kit", image: kitShowcase, subtitle: "2026 / 27", title: "NEW KIT" },
];

/**
 * Works out where a slide sits relative to the active one.
 * @param index - Which slide to place.
 * @param tick - The number of advances so far.
 * @returns 0 for the active slide, -1 for the one just left, and 1 for any waiting off screen.
 */
function slidePosition(index: number, tick: number): -1 | 0 | 1 {
    const position = ((index - tick) % slides.length + slides.length) % slides.length;

    if (position === 0)
        return 0;

    return position === slides.length - 1 ? -1 : 1;
}

/**
 * Displays a carousel of hero images, with a caption that slides the opposite way.
 * @returns The hero background images and captions.
 */
export function HeroImage(): ReactNode {
    const theme = useTheme();
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTick((previous) => previous + 1), heroIntervalMs);

        return (): void => clearInterval(interval);
    }, []);

    return (
        <>
            <Box sx={{ inset: 0, overflow: "hidden", position: "absolute" }}>
                {slides.map(({ alt, image }, index) => {
                    const position = slidePosition(index, tick);

                    return (
                        <Box
                            key={alt}
                            sx={{
                                inset: 0,
                                position: "absolute",
                                transform: `translateX(${position * 100}%)`,
                                // Slides jumping from one side to the other must not animate across the screen.
                                transition: position === 1 ? "none" : heroTransition,
                            }}
                        >
                            <Image
                                alt={alt}
                                fill
                                loading="eager"
                                priority={index === 0}
                                sizes="100vw"
                                src={image}
                                style={{ objectFit: "cover", objectPosition: "center 38%" }}
                            />
                        </Box>
                    );
                })}
            </Box>
            <Box
                sx={{
                    borderLeft: `2px solid ${theme.palette.tertiary.main}`,
                    bottom: 2.5,
                    display: { md: "block", xs: "none" },
                    mb: 2,
                    p: 2,
                    position: "absolute",
                    right: "max(3rem, calc((100vw - 70rem) / 2))",
                    zIndex: 1,
                }}
            >
                <Box sx={{ display: "grid", overflow: "hidden" }}>
                    {slides.map(({ alt, subtitle, title }, index) => {
                        const position = slidePosition(index, tick);

                        return (
                            <Box
                                key={alt}
                                sx={{
                                    // The old label leaves right and the new one enters from the left.
                                    gridArea: "1 / 1",
                                    transform: `translateX(${position * -100}%)`,
                                    transition: position === 1 ? "none" : heroTransition,
                                }}
                            >
                                <Typography
                                    sx={{ color: "common.white", fontSize: "0.7rem", letterSpacing: "0.16em" }}
                                    variant="overline"
                                >
                                    {title}
                                </Typography>
                                <Typography sx={{ color: "common.white", fontWeight: 700 }} variant="h6">
                                    {subtitle}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </>
    );
}
