import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Displays a consistent placeholder for pages that are still being prepared.
 * @returns A centered coming-soon message.
 */
export function PageComingSoon(): ReactNode {
    return (
        <Box
            aria-labelledby="page-coming-soon-title"
            component="section"
            sx={{ maxWidth: "70rem", mx: "auto", pb: { md: 10, xs: 8 }, px: { md: 5, xs: 3 }, width: "100%" }}
        >
            <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
                <Typography component="h2" id="page-coming-soon-title" variant="h2">
                    Coming soon
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: "42rem" }} variant="body1">
                    We&apos;re working on this page. Check back soon for updates.
                </Typography>
            </Stack>
        </Box>
    );
}
