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
            <Typography color="warning" gutterBottom variant="h6">DRAFT DOCUMENT – NOT AN APPROVED POLICY</Typography>
            <Typography color="warning">
                This document is a draft prepared for the BSRFC website rewrite. It is provided for example only and
                does not represent the Club&apos;s final or approved policy. It will be replaced with an official
                document approved by the Club before publication.
            </Typography>
        </Box>
    );
}
