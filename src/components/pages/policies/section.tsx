import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Displays a policy section with a heading and body content.
 * @param props - The properties for the policy section component.
 * @param props.title - The title content of the policy section.
 * @param props.children - The body content of the policy section.
 * @returns The policy section content.
 */
export function Section({ title, children }: Readonly<{ title: string; children: ReactNode; }>): ReactNode {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography gutterBottom variant="h5">{title}</Typography>
            {children}
        </Box>
    );
}
