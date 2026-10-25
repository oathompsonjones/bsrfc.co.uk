import { Box } from "@mui/material";
import type { ReactNode } from "react";

export const clubWords = ["town", "community", "club"];

/**
 * Displays a prefix followed by one word from a vertically rotating word list.
 * @param props - The rotating word content and animation state.
 * @param props.prefix - Text placed before the rotating word.
 * @param props.words - The words to cycle through.
 * @param props.tick - The current word index.
 * @param props.transition - The CSS transform transition.
 * @returns The inline animated title content.
 */
export function RotatingWords({ prefix, tick, transition, words }: Readonly<{
    prefix: string;
    tick: number;
    transition: string;
    words: string[];
}>): ReactNode {
    return (
        <>
            {prefix}{" "}
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
        </>
    );
}
