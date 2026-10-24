import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

const words = ["town", "community", "club"];

/**
 * The homepage hero heading, with a cycling final word.
 * @param props - The component props.
 * @param props.tick - The current tick count for the word rotation.
 * @param props.transition - The CSS transition for the word rotation.
 * @returns The hero heading.
 */
export function RotatingText({ tick, transition }: Readonly<{
    tick: number;
    transition: string;
}>): ReactNode {
    return (
        <Typography
            component="h1"
            sx={{ color: "common.white", maxWidth: "14ch" }}
            variant="heroTitle"
        >
            One{" "}
            <Box
                component="span"
                sx={{
                    display: "inline-block",
                    height: "1.15em",
                    overflow: "hidden",
                    perspective: "500px",
                    transform: "translateY(0.08em)",
                    verticalAlign: "bottom",
                }}
            >
                <Box
                    component="span"
                    sx={{
                        display: "inline-grid",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {words.map((word, index) => {
                        const offset = ((index - tick) % words.length + words.length) % words.length;
                        const position = offset === words.length - 1 ? -1 : offset;
                        const rotation = -position * 90;

                        return (
                            <Box
                                component="span"
                                key={word}
                                sx={{
                                    alignItems: "center",
                                    backfaceVisibility: "hidden",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    gridArea: "1 / 1",
                                    height: "1.15em",
                                    lineHeight: 1,
                                    transform: `translateY(${position * 100}%) rotateX(${rotation}deg)`,
                                    transformOrigin: "center center",
                                    transformStyle: "preserve-3d",
                                    transition: position === 1 ? "none" : transition,
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
