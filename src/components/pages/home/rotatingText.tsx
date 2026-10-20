"use client";

import { Box, Typography } from "@mui/material";
import { heroIntervalMs, heroTransition } from "./heroTiming";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const words = ["town", "community", "club"];

/**
 * The homepage hero heading, with a cycling final word.
 * @returns The hero heading.
 */
export function RotatingText(): ReactNode {
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTick((previousTick) => previousTick + 1);
        }, heroIntervalMs);

        return (): void => clearInterval(interval);
    }, []);

    return (
        <Typography
            component="h1"
            sx={{
                color: "common.white",
                fontSize: {
                    md: "clamp(4rem, 7.5vw, 6.5rem)",
                    xs: "clamp(3.2rem, 13vw, 4.5rem)",
                },
                fontWeight: 800,
                letterSpacing: "-0.055em",
                lineHeight: 0.98,
                maxWidth: "14ch",
            }}
            variant="h1"
        >
            One{" "}
            <Box
                component="span"
                sx={{
                    display: "inline-block",
                    height: "1.15em",
                    overflow: "hidden",
                    transform: "translateY(0.08em)",
                    verticalAlign: "bottom",
                }}
            >
                <Box component="span" sx={{ display: "inline-grid" }}>
                    {words.map((word, index) => {
                        const offset = ((index - tick) % words.length + words.length) % words.length;
                        const position = offset === words.length - 1 ? -1 : offset;

                        return (
                            <Box
                                component="span"
                                key={word}
                                sx={{
                                    alignItems: "center",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    gridArea: "1 / 1",
                                    height: "1.15em",
                                    lineHeight: 1,
                                    transform: `translateY(${position * 100}%)`,
                                    transition: position === 1 ? "none" : heroTransition,
                                }}
                            >
                                {word}.
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Typography>
    );
}
