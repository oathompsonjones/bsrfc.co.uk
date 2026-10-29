import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Displays a consistent placeholder for content that will move into the CMS.
 * @param props - The placeholder properties.
 * @param props.pageTitle - The title of the page being prepared.
 * @returns A centered CMS placeholder message.
 */
export function PageCms({ pageTitle }: { readonly pageTitle: string; }): ReactNode {
    return (
        <Box
            aria-labelledby="page-cms-title"
            component="section"
            sx={{ maxWidth: "70rem", mx: "auto", pb: { md: 10, xs: 8 }, px: { md: 5, xs: 3 }, width: "100%" }}
        >
            <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
                <Typography component="h2" id="page-cms-title" variant="h2">
                    This page will be populated by the CMS
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: "42rem" }} variant="body1">
                    Content for {pageTitle} will be managed here when the club CMS is ready.
                </Typography>
            </Stack>
        </Box>
    );
}
