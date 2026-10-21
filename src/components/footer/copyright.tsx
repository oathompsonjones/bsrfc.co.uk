"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Displays copyright, company, charity, and website credit information.
 * @returns The footer attribution details.
 */
export function Copyright(): ReactNode {
    const startYear = 2026;
    const currentYear = new Date().getUTCFullYear();
    const copyrightYear = currentYear > startYear
        ? `${startYear}-${currentYear}`
        : `${startYear}`;
    const content = [
        `© ${copyrightYear} Bishop's Stortford Rugby Football Club`,
        "Company No. 09612222",
        "Charity No. 1162479",
    ];

    return (
        <Stack>
            <Stack
                direction={{ sm: "row", xs: "column" }}
                divider={
                    <Box
                        component="span"
                        sx={{ color: "lightgrey", display: { sm: "inline", xs: "none" }, px: 1 }}
                    >
                        •
                    </Box>
                }
                sx={{ alignItems: "center", maxWidth: "100%" }}
            >
                {content.map((item) => (
                    <Typography key={item} variant="caption">{item}</Typography>
                ))}
            </Stack>
            <Typography variant="caption">
                Website designed & developed by <b><Link href="https://oathompsonjones.co.uk">Oliver Jones</Link></b>.
            </Typography>
        </Stack>
    );
}
