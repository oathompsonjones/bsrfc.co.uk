"use client";

import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { TeamSection } from "components/teamSection";
import { useParams } from "next/navigation";

/**
 * This is the teams page.
 * @returns The teams page.
 */
export default function Teams(): ReactNode {
    const { team } = useParams();

    const isTeamVisible = (teamName: string): boolean => team === undefined ||
        team.length === 1 && team[0] === teamName;

    return (
        <>
            <Box sx={{ py: 10, textAlign: "center" }}>
                <Typography variant="h2">
                    #OneClub
                </Typography>

                <Typography sx={{ mt: 2 }} variant="h1">
                    Our Teams
                </Typography>

                <Typography sx={{ maxWidth: 700, mt: 2, mx: "auto" }} variant="body1">
                    From our youngest players taking their first steps
                    on the pitch, to our senior sides competing at the
                    highest level, we're all part of the same club.
                </Typography>
            </Box>
            {isTeamVisible("men") && (
                <TeamSection
                    teams={[
                        [
                            { title: <>1<sup>st</sup> XV</> },
                            { subtitle: <>2<sup>nd</sup> XV</>, title: "Blues" },
                        ],
                        [
                            { subtitle: <>3<sup>rd</sup> XV</>, title: "Mitres" },
                            { subtitle: <>4<sup>th</sup> XV</>, title: "Chindits" },
                            { subtitle: <>5<sup>th</sup> XV</>, title: "Abbotts" },
                        ],
                    ]}
                    title="Men"
                />
            )}
            {isTeamVisible("women") && (
                <TeamSection
                    teams={[
                        [
                            { title: <>1<sup>st</sup> XV</> },
                            { title: <>2<sup>nd</sup> XV</> },
                        ],
                    ]}
                    title="Women"
                />
            )}
            {isTeamVisible("colts") && (
                <TeamSection
                    teams={[[{ title: "Colts A" }, { title: "Colts B" }]]}
                    title="Colts"
                />
            )}
            {isTeamVisible("youth") && (
                <TeamSection
                    teams={[
                        [{ title: "Under 16s A" }, { title: "Under 16s B" }],
                        [{ title: "Under 15s A" }, { title: "Under 15s B" }],
                        [{ title: "Under 14s A" }, { title: "Under 14s B" }],
                        [{ title: "Under 13s A" }, { title: "Under 13s B" }],
                        [{ title: "Under 12s" }],
                    ]}
                    title="Youth"
                />)}
            {isTeamVisible("girls") && (
                <TeamSection
                    teams={[
                        [{ title: "Under 18s" }, { title: "Under 16s" }],
                        [{ title: "Under 14s" }, { title: "Under 12s" }],
                    ]}
                    title="Girls"
                />
            )}
            {isTeamVisible("minis") && (
                <TeamSection
                    teams={[
                        [{ title: "Under 11s" }, { title: "Under 10s" }, { title: "Under 9s" }],
                        [{ title: "Under 8s" }, { title: "Under 7s" }, { title: "Under 6s" }],
                    ]}
                    title="Minis"
                />
            )}
            {isTeamVisible("touch") && (
                <TeamSection teams={[[{ title: "Mixed" }]]} title="Touch" />
            )}
        </>
    );
}
