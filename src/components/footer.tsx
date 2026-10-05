import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Contains the footer element.
 * @returns The page footer.
 */
export function Footer(): ReactNode {
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
        <Box component="footer" sx={{ px: { xs: 2, sm: 0 }, py: 1 }}>
            <Stack spacing={0.5} alignItems="center" sx={{ textAlign: "center", width: "100%" }}>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    divider={<Box component="span" sx={{ color: "lightgrey", display: { xs: "none", sm: "inline" }, px: 1 }}>•</Box>}
                    alignItems="center"
                    sx={{ maxWidth: "100%" }}
                >
                    {content.map((item) => (
                        <Typography key={item} variant="caption">
                            {item}
                        </Typography>
                    ))}
                </Stack>
                <Typography variant="caption">
                    Website designed & developed by{" "}
                    <strong>
                        <a href="https://oathompsonjones.co.uk">Oliver Jones</a>
                    </strong>
                </Typography>
            </Stack>
        </Box>
    );
}
