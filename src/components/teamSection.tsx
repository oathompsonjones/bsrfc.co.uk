import { Card, CardContent, Divider, Typography } from "@mui/material";
import type { ReactNode } from "react";

type Team = string | { name: string; rank: string; };

/**
 * A section of teams under a centred heading, arranged in caller-defined rows.
 * @param props - The properties of the component.
 * @param props.teams - The rows of teams in the section.
 * @param props.title - The section heading.
 * @returns A heading with the section's teams beneath it.
 */
export function TeamSection({ teams = [], title }: { teams?: Team[][]; title: string; }): ReactNode {
    return (
        <section>
            <Divider />
            <Typography variant="h2" className="text-center">{title}</Typography>
            <div className="grid gap-4">
                {teams.map((row, index) => (
                    <div
                        key={index}
                        className="mx-auto grid gap-4 text-center"
                        style={{
                            gridColumn: "auto",
                            gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
                            width: `${row.length / 3 * 100}%`,
                        }}
                    >
                        {row.map((team) => (
                            <Card
                                key={typeof team === "string" ? team : `${team.rank}-${team.name}`}
                                sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    gridColumn: "auto",
                                    justifyContent: "center",
                                    minHeight: 104,
                                    textAlign: "center",
                                }}
                            >
                                <CardContent sx={{ paddingBottom: 2, width: "100%" }}>
                                    {typeof team === "string" ? (
                                        <Typography variant="h3">{team}</Typography>
                                    ) : (
                                        <>
                                            <Typography variant="h3">{team.name}</Typography>
                                            <Typography variant="body2" sx={{ color: "text.secondary" }}>{team.rank}</Typography>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
