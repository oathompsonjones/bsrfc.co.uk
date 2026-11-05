
import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Displays a policy page heading.
 * @param props - The properties for the policy heading component.
 * @param props.title - The title of the policy page.
 * @param props.updated - The date when the policy was last reviewed.
 * @returns The policy heading content.
 */
export function Heading({ title, updated }: Readonly<{ title: string; updated: string; }>): ReactNode {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography gutterBottom variant="h3">{title}</Typography>
            <Typography>Last reviewed: {updated}</Typography>
        </Box>
    );
}
