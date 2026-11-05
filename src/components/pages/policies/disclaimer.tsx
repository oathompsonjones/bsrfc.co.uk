import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Displays a prominent notice identifying the policy as a draft.
 * This must be removed when the final, approved policy is published.
 * @returns The draft disclaimer content.
 */
export function Disclaimer(): ReactNode {
    return (
        <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
                color="warning"
                gutterBottom
                sx={{ fontWeight: "900", textTransform: "uppercase" }}
                variant="h6"
            >
                Draft Document – Not an Approved Policy
            </Typography>
            <Typography color="warning" sx={{ fontWeight: "700" }}>
                This document is a draft prepared for the BSRFC website rewrite. It is provided for example only and
                does not represent the Club&apos;s final or approved policy. It will be replaced with an official
                document approved by the Club before publication.
            </Typography>
        </Box>
    );
}
