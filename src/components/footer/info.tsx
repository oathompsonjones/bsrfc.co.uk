"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Displays copyright, company, charity, and website credit information.
 * @returns The footer attribution details.
 */
export function Info(): ReactNode {
    const startYear = 2026;
    const currentYear = new Date().getUTCFullYear();
    const copyrightYear = currentYear > startYear
        ? `${startYear}-${currentYear}`
        : `${startYear}`;

    const divider = (
        <Box component="span" sx={{ color: "lightgrey", display: { sm: "inline", xs: "none" }, px: 1 }}>•</Box>
    );

    return (
        <Stack sx={{ alignItems: "center" }}>
            <Stack
                direction={{ sm: "row", xs: "column" }}
                divider={divider}
                sx={{ alignItems: "center", maxWidth: "100%" }}
            >
                <Typography variant="caption">
                    Silver Leys, Hadham Road, Bishop's Stortford, Hertfordshire, CM23 2QE, UK
                </Typography>
                <Typography variant="caption">
                    01279 652092
                </Typography>
                <Typography variant="caption">
                    <Link href="mailto:secretary@bsrfc.co.uk">secretary@bsrfc.co.uk</Link>
                </Typography>
            </Stack>
            <Stack
                direction={{ sm: "row", xs: "column" }}
                divider={divider}
                sx={{ alignItems: "center", maxWidth: "100%" }}
            >
                <Typography variant="caption">© {copyrightYear} Bishop's Stortford Rugby Football Club</Typography>
                <Typography variant="caption">Company No. 09612222</Typography>
                <Typography variant="caption">Charity No. 1162479</Typography>
            </Stack>
            <Typography variant="caption">
                Website designed & developed by{" "}
                <Link href="https://oathompsonjones.co.uk" style={{ fontWeight: "bold" }}>Oliver Jones</Link>.
            </Typography>
        </Stack>
    );
}
