"use client";

import { Box, Stack, Typography } from "@mui/material";
import { HeroBackground, slideIntervalMs, slideTransition } from "components/heroBackground";
import { useEffect, useState } from "react";
import type { HeroBackgroundImage } from "components/heroBackground";
import type { ReactNode } from "react";
import { RotatingWords } from "components/rotatingWords";

type HeroProps = {
    rotatingTitle?: {
        letterSpacing?: string;
        lineHeight?: number;
        maxWidth?: string;
        prefix: string;
        words: string[];
    };
    title?: ReactNode;
    overline?: string;
    intro?: ReactNode;
    large?: boolean;
    overlay?: string;
    contentSpacing?: number;
    children?: ReactNode;
} & (
    | { image: HeroBackgroundImage; images?: never; }
    | { image?: never; images: HeroBackgroundImage[]; }
);

/**
 * Displays a responsive image-led page introduction.
 * @param props - The content, background images, and size options.
 * @param props.image - A single background image. Mutually exclusive with images.
 * @param props.images - Background images that cycle automatically. Mutually exclusive with image.
 * @param props.children - Optional page-specific actions or content.
 * @param props.contentSpacing - Spacing between default hero content blocks.
 * @param props.intro - Optional introductory text beneath the title.
 * @param props.large - Whether to use the large, viewport-filling layout.
 * @param props.overline - Optional label above the title.
 * @param props.overlay - Optional background overlay gradient.
 * @param props.rotatingTitle - Optional prefix and word list for an animated title.
 * @param props.title - The main page heading when it is not rotating.
 * @returns An image-led hero section with responsive sizing.
 */
export function Hero(props: Readonly<HeroProps>): ReactNode {
    const { image, images: imageList } = props;
    const {
        children,
        intro,
        large = false,
        overline,
        overlay = "linear-gradient(90deg, rgb(18 18 18 / 88%) 0%, rgb(18 18 18 / 64%) 52%, rgb(18 18 18 / 18%) 100%)",
        contentSpacing = 1,
        rotatingTitle,
        title,
    } = props;
    const images = image === undefined ? imageList : [image];
    const [tick, setTick] = useState(0);
    const slideCount = Math.max(images.length, rotatingTitle?.words.length ?? 1);
    const titleFontSize = large
        ? { md: "clamp(4rem, 7.5vw, 6.5rem)", xs: "clamp(3.2rem, 13vw, 4.5rem)" }
        : { md: "clamp(3rem, 6vw, 5rem)", xs: "clamp(2.75rem, 12vw, 3.5rem)" };
    let overlineElement: ReactNode = null;
    let introElement: ReactNode = null;

    if (overline !== undefined && overline.length > 0) {
        overlineElement = (
            <Stack
                direction="row"
                spacing={1.25}
                sx={{ alignItems: "center", mb: large ? 2.5 : 0 }}
            >
                <Box sx={{ bgcolor: "secondary.main", height: 2, width: 32 }} />
                <Typography
                    component="p"
                    sx={{ color: "common.white", textTransform: "uppercase" }}
                    variant="overline"
                >
                    {overline}
                </Typography>
            </Stack>
        );
    }

    if (intro !== undefined && intro !== null) {
        introElement = (
            <Typography
                sx={{
                    color: "lightgrey",
                    ...large
                        ? {
                            fontSize: { md: "1.2rem", xs: "1rem" },
                            maxWidth: "34rem",
                            mt: 3,
                        }
                        : { maxWidth: "40rem", pt: 1 },
                }}
                variant="body1"
            >
                {intro}
            </Typography>
        );
    }

    useEffect(() => {
        const timer = slideCount > 1
            ? setInterval(() => setTick((current) => current + 1), slideIntervalMs)
            : undefined;

        return (): void => {
            if (timer !== undefined)
                clearInterval(timer);
        };
    }, [slideCount]);

    return (
        <Box
            className="edge"
            component="section"
            sx={{
                alignItems: "center",
                display: "flex",
                height: large ? undefined : { md: "22rem", xs: "20rem" },
                mb: 4,
                minHeight: large ? { sm: "calc(100svh - 230px)", xs: "calc(100svh - 222px)" } : undefined,
                mt: -2,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <HeroBackground activeIndex={tick} images={images} />
            <Box sx={{ background: overlay, inset: 0, position: "absolute" }} />
            <Stack
                spacing={contentSpacing}
                sx={{
                    maxWidth: "70rem",
                    mx: "auto",
                    position: "relative",
                    px: { md: 5, xs: 3 },
                    width: "100%",
                    zIndex: 1,
                }}
            >
                {overlineElement}
                <Typography
                    aria-label={rotatingTitle
                        ? `${rotatingTitle.prefix} ${rotatingTitle.words.join(", ")}`
                        : undefined}
                    component="h1"
                    sx={{
                        color: "common.white",
                        fontSize: titleFontSize,
                        fontWeight: 800,
                        letterSpacing: rotatingTitle?.letterSpacing ?? "-0.05em",
                        lineHeight: rotatingTitle?.lineHeight ?? 1,
                        maxWidth: rotatingTitle?.maxWidth,
                    }}
                    variant="h1"
                >
                    {rotatingTitle
                        ? (
                            <RotatingWords
                                prefix={rotatingTitle.prefix}
                                tick={tick}
                                transition={slideTransition}
                                words={rotatingTitle.words}
                            />
                        )
                        : title}
                </Typography>
                {introElement}
                {children}
            </Stack>
        </Box>
    );
}
