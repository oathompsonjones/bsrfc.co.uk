"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export type HeroBackgroundImage = {
    alt: string;
    image: StaticImageData;
    subtitle?: string;
    title?: string;
};

export const slideIntervalMs = 6500;
export const slideTransition = "transform 1500ms ease";

/**
 * Displays one or more full-bleed hero images, cycling when given multiple images.
 * @param props - The background images to display.
 * @param props.activeIndex - The active slide index shared with the title and captions.
 * @param props.images - Images and accessible descriptions for the hero background.
 * @returns The hero background image layer.
 */
export function HeroBackground({ activeIndex, images }: Readonly<{
    activeIndex: number;
    images: HeroBackgroundImage[];
}>): ReactNode {
    const currentIndex = activeIndex % images.length;

    return (
        <Box sx={{ inset: 0, overflow: "hidden", position: "absolute" }}>
            {images.map(({ alt, image }, index) => {
                const position = (index - currentIndex + images.length) % images.length;
                let transform = 100;

                if (position === 0)
                    transform = 0;
                else if (position === images.length - 1)
                    transform = -100;

                return (
                    <Box
                        aria-hidden={position !== 0}
                        key={alt}
                        sx={{
                            inset: 0,
                            position: "absolute",
                            transform: `translateX(${transform}%)`,
                            transition: position === 0 || position === images.length - 1
                                ? slideTransition
                                : "none",
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
            {images.some(({ title, subtitle }) => title !== undefined || subtitle !== undefined)
                ? (
                    <Box
                        aria-hidden="true"
                        sx={{
                            borderLeft: "2px solid",
                            // This must follow borderLeft so its shorthand does not reset the accent color.
                            // eslint-disable-next-line sort-keys
                            borderColor: "secondary.main",
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
                            {images.map(({ subtitle, title, alt }, index) => {
                                const slide = (index - currentIndex + images.length) % images.length;
                                let position = 1;

                                if (slide === 0)
                                    position = 0;
                                else if (slide === images.length - 1)
                                    position = -1;

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
                                            transformStyle: "preserve-3d",
                                            transition: slide === 0 || slide === images.length - 1
                                                ? slideTransition
                                                : "none",
                                        }}
                                    >
                                        {title !== undefined && title.length > 0
                                            ? (
                                                <Typography
                                                    sx={{
                                                        color: "common.white",
                                                        fontSize: "0.7rem",
                                                        letterSpacing: "0.16em",
                                                    }}
                                                    variant="overline"
                                                >
                                                    {title}
                                                </Typography>
                                            )
                                            : null}
                                        {subtitle !== undefined && subtitle.length > 0
                                            ? (
                                                <Typography
                                                    sx={{ color: "common.white", fontWeight: 700 }}
                                                    variant="h6"
                                                >
                                                    {subtitle}
                                                </Typography>
                                            )
                                            : null}
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                )
                : null}
        </Box>
    );
}
