import { Box, Button, Stack, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type SectionProps = Readonly<{
    image: StaticImageData;
    imageAlt: string;
    imageFirst?: boolean;
    light?: boolean;
    linkHref: string;
    linkText: string;
    text: string;
    title: string;
}>;

/**
 * Displays an image-led section.
 * @param props - The section content, image, and presentation options.
 * @param props.image - The photograph to display.
 * @param props.imageAlt - Alternative text for the photograph.
 * @param props.imageFirst - Whether the image appears before the text on desktop.
 * @param props.light - Whether to use a white background section.
 * @param props.linkHref - Where the section button leads.
 * @param props.linkText - The section button label.
 * @param props.text - The section body copy.
 * @param props.title - The section heading.
 * @returns An alternating image and text section.
 */
export default function Section({
    image,
    imageAlt,
    imageFirst = true,
    light = false,
    linkHref,
    linkText,
    text,
    title,
}: Readonly<SectionProps>): ReactNode {
    return (
        <Box
            className="edge"
            component="section"
            sx={{
                bgcolor: light ? "rgba(255, 255, 255, 0.9)" : "transparent",
                color: light ? "primary.main" : "common.white",
                py: { md: 8, xs: 5 },
            }}
        >
            <Box
                sx={{
                    alignItems: "center",
                    display: "grid",
                    gap: { md: 7, xs: 3 },
                    gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))", xs: "1fr" },
                    maxWidth: "76rem",
                    mx: "auto",
                    px: { md: 5, xs: 3 },
                    width: "100%",
                }}
            >
                <Box sx={{ gridColumn: { md: imageFirst ? 1 : 2 }, gridRow: { md: 1 }, position: "relative" }}>
                    <Image
                        alt={imageAlt}
                        sizes="(max-width: 900px) 100vw, 50vw"
                        src={image}
                        style={{
                            aspectRatio: "4 / 3",
                            display: "block",
                            height: "auto",
                            objectFit: "cover",
                            width: "100%",
                        }}
                    />
                </Box>
                <Stack
                    spacing={2}
                    sx={{
                        gridColumn: { md: imageFirst ? 2 : 1 },
                        gridRow: { md: 1 },
                        py: { md: 2, xs: 0 },
                    }}
                >
                    <Typography component="h2" sx={{ color: "inherit", fontWeight: 800 }} variant="h3">
                        {title}
                    </Typography>
                    <Typography sx={{ color: "inherit", lineHeight: 1.85 }} variant="body1">
                        {text}
                    </Typography>
                    <div>
                        <Button
                            href={linkHref}
                            sx={{
                                bgcolor: light ? "primary.main" : "common.white",
                                color: light ? "common.white" : "primary.main",
                                float: light ? "right" : "none",
                            }}
                            variant="contained"
                        >
                            {linkText}
                        </Button>
                    </div>
                </Stack>
            </Box>
        </Box>
    );
}
