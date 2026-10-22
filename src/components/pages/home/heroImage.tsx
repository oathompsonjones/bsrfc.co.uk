"use client";

import { Box, Typography } from "@mui/material";
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
 * @returns 0 for the active slide, -1 for the one just left, and 1 for a waiting slide.
 */
function slidePosition(index: number, tick: number): -1 | 0 | 1 {
    const position = ((index - tick) % slides.length + slides.length) % slides.length;

    if (position === 0)
        return 0;

    return position === slides.length - 1 ? -1 : 1;
}

/**
 * Displays a carousel of hero images, with a 3D-rotating caption.
 * @param props - The component props.
 * @param props.tick - The current tick count for the carousel.
 * @param props.transition - The CSS transition for the slide and caption animations.
 * @returns The hero background images and captions.
 */
export function HeroImage({ tick, transition }: Readonly<{
    tick: number;
    transition: string;
}>): ReactNode {
    const theme = useTheme();

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
                                transition: position === 1 ? "none" : transition,
                            }}
                        >
                            <Image
                                alt={alt}
                                fill
                                loading="eager"
                                priority={index === 0}
                                sizes="100vw"
                                src={image}
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center 38%",
                                }}
                            />
                        </Box>
                    );
                })}
            </Box>

            <Box
                sx={{
                    borderLeft: `2px solid ${theme.palette.secondary.main}`,
                    bottom: 2.5,
                    display: { md: "block", xs: "none" },
                    mb: 2,
                    p: 2,
                    perspective: "600px",
                    position: "absolute",
                    right: "max(3rem, calc((100vw - 90rem) / 2))",
                    zIndex: 1,
                }}
            >
                <Box sx={{ display: "grid", overflow: "hidden" }}>
                    {slides.map(({ alt, subtitle, title }, index) => {
                        const position = slidePosition(index, tick);
                        const rotation = position * 75;

                        return (
                            <Box
                                key={alt}
                                sx={{
                                    alignItems: "flex-start",
                                    backfaceVisibility: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    gridArea: "1 / 1",
                                    transform: `translateX(${position * -100}%) rotateY(${rotation}deg)`,
                                    transformOrigin: position === 1 ? "right center" : "left center",
                                    transition: position === 1 ? "none" : transition,
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
