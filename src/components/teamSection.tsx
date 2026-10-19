"use client";

import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Theme } from "@mui/material";
import { useCallback } from "react";

type NonNullableReactNode = NonNullable<ReactNode>;

type Team = {
    link?: string;
    title: NonNullableReactNode;
    subtitle?: NonNullableReactNode;
};

/**
 * A section of teams under a centred heading, arranged in caller-defined rows.
 * @param props - The properties of the component.
 * @param props.teams - The rows of teams in the section.
 * @param props.title - The section heading.
 * @returns A heading with the section's teams beneath it.
 */
export function TeamSection({ teams, title }: { readonly teams?: Team[][]; readonly title: string; }): ReactNode {
    const cardSx = useCallback((theme: Theme) => ({
        alignItems: "center",
        borderBottom: `5px solid ${theme.palette.secondary.main}`,
        display: "flex",
        gridColumn: "auto",
        justifyContent: "center",
        minHeight: 104,
        textAlign: "center",
    }), []);

    return (
        <section>
            <Divider />
            <Typography sx={{ textAlign: "center" }} variant="h2">
                {title}
            </Typography>
            <Divider />
            <Box sx={{ display: "grid", gap: 2 }}>
                {teams?.map((row, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "grid",
                            gap: 2,
                            gridColumn: "auto",
                            gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
                            marginX: "auto",
                            textAlign: "center",
                            width: `${row.length / 3 * 100}%`,
                        }}
                    >
                        {row.map((team, i) => (
                            <Card
                                component={Link}
                                href={team.link ?? "#"}
                                key={i}
                                sx={cardSx}
                            >
                                <CardContent sx={{ paddingBottom: 2, width: "100%" }}>
                                    {typeof team !== "object" || !("subtitle" in team)
                                        ? (
                                            <Typography variant="h3">{team.title}</Typography>
                                        )
                                        : (
                                            <>
                                                <Typography variant="h3">{team.title}</Typography>
                                                <Typography sx={{ color: "text.secondary" }} variant="body2">
                                                    {team.subtitle}
                                                </Typography>
                                            </>
                                        )}
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                ))}
            </Box>
        </section>
    );
}
