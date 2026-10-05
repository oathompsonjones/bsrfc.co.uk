import type { ReactNode } from "react";
import { TeamSection } from "components/teamSection";
import { Typography, Box } from "@mui/material";

/**
 * This is the teams page.
 * @returns The teams page.
 */
export default function Teams(): ReactNode {
    return (
        <>
            <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography variant="h2">
                    #OneClub
                </Typography>

                <Typography variant="h1" sx={{ mt: 2 }}>
                    Our Teams
                </Typography>

                <Typography variant="body1" sx={{ maxWidth: 700, mx: "auto", mt: 2 }}>
                    From our youngest players taking their first steps
                    on the pitch, to our senior sides competing at the
                    highest level, we're all part of the same club.
                </Typography>
            </Box>
            <TeamSection title="Men" teams={[["1st XV", { name: "Blues", rank: "2nd XV" }], [{ name: "Mitres", rank: "3rd XV" }, { name: "Chindits", rank: "4th XV" }, { name: "Abbotts", rank: "5th XV" }]]} />
            <TeamSection title="Women" teams={[["1st XV", "2nd XV"]]} />
            <TeamSection title="Colts" teams={[["Colts A", "Colts B"]]} />
            <TeamSection title="Youth" teams={[["Under 16s A", "Under 16s B"], ["Under 15s A", "Under 15s B"], ["Under 14s A", "Under 14s B"], ["Under 13s A", "Under 13s B"], ["Under 12s"]]} />
            <TeamSection title="Girls" teams={[["Under 18s", "Under 16s"], ["Under 14s", "Under 12s"]]} />
            <TeamSection title="Minis" teams={[["Under 11s", "Under 10s", "Under 9s"], ["Under 8s", "Under 7s", "Under 6s"]]} />
            <TeamSection title="Touch" teams={[["Mixed"]]} />
        </>
    );
}
