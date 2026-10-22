"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Link from "next/link";
import type { ReactNode } from "react";

type Team = {
    link?: string;
    title: NonNullable<ReactNode>;
    subtitle?: NonNullable<ReactNode>;
};

/**
 * A section of teams under a heading, arranged in a responsive card grid.
 * @param props - The properties of the component.
 * @param props.teams - The rows of teams in the section.
 * @param props.title - The section heading.
 * @returns A heading with the section's teams beneath it.
 */
export function TeamSection({ teams, title }: { readonly teams?: Team[][]; readonly title: string; }): ReactNode {
    const theme = useTheme();
    const cardBorder = alpha(theme.palette.common.white, 0.18);

    return (
        <Box component="section" sx={{ mt: { md: 7, xs: 5 } }}>
            <Box sx={{ alignItems: "center", display: "flex", gap: 2, mb: 2.5 }}>
                <Box sx={{ bgcolor: theme.palette.secondary.main, height: 2, width: 28 }} />
                <Typography
                    component="h2"
                    sx={{ color: "common.white", fontSize: { md: "2rem", xs: "1.6rem" }, fontWeight: 750 }}
                    variant="h2"
                >
                    {title}
                </Typography>
            </Box>
            {teams?.map((row, rowIndex) => (
                <Box
                    key={rowIndex}
                    sx={{
                        display: "flex",
                        gap: { md: 2, xs: 1.5 },
                        mb: { md: 2, xs: 1.5 },
                    }}
                >
                    {row.map(({ link, subtitle, title: teamTitle }, index) => (
                        <Card
                            component={Link}
                            href={link ?? "#"}
                            key={`${title}-${index}`}
                            sx={{
                                bgcolor: "background.paper",
                                border: `1px solid ${cardBorder}`,
                                borderTop: `3px solid ${theme.palette.secondary.main}`,
                                color: "common.white",
                                flex: "1 1 10rem",
                                gridColumn: "auto",
                                minHeight: { md: 132, xs: 112 },
                                transition: "transform 180ms ease, border-color 180ms ease",
                            }}
                        >
                            <CardContent
                                sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    minHeight: "inherit",
                                    pb: "16px !important",
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    component="h3"
                                    sx={{
                                        color: "common.white",
                                        fontSize: { md: "1.4rem", xs: "1.2rem" },
                                        fontWeight: 700,
                                    }}
                                    variant="h5"
                                >
                                    {teamTitle}
                                </Typography>
                                {subtitle !== undefined && (
                                    <Typography
                                        sx={{ color: alpha(theme.palette.common.white, 0.68), mt: 0.5 }}
                                        variant="body2"
                                    >
                                        {subtitle}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            ))}
        </Box>
    );
}
