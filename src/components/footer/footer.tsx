"use client";

import { Box, Divider, Stack } from "@mui/material";
import { Copyright } from "./copyright";
import { ExtraLinks } from "./extraLinks";
import type { ReactNode } from "react";
import { Socials } from "./socials";
import { Sponsors } from "./sponsors";

/**
 * Contains the footer element.
 * @returns The page footer.
 */
export function Footer(): ReactNode {
    return (
        <Box component="footer" sx={{ px: { sm: 0, xs: 2 }, py: 1 }}>
            <Divider className="full-width" sx={{ my: 1 }} />
            <Stack className="edge" spacing={3} sx={{ alignItems: "center", textAlign: "center", width: "100%" }}>
                <Socials />
                <ExtraLinks />
                <Sponsors />
                <Copyright />
            </Stack>
        </Box>
    );
}
