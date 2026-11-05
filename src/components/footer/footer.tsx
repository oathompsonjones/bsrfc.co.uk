"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { Info } from "./info";
import Link from "next/link";
import type { ReactNode } from "react";
import { Sponsors } from "./sponsors";

/**
 * Contains the footer element.
 * @returns The page footer.
 */
export function Footer(): ReactNode {
    return (
        <Box component="footer" sx={{ px: { sm: 0, xs: 2 }, py: 1 }}>
            <Divider className="full-width" sx={{ my: 3 }} />
            <Stack className="edge wrapper" spacing={3}>
                <Sponsors />
                <Info />
                <Typography sx={{ textAlign: "center" }} variant="caption">
                    Website designed & developed by{" "}
                    <Link href="https://oathompsonjones.co.uk" style={{ fontWeight: "bold", textDecoration: "none" }}>
                        Oliver Jones
                    </Link>.
                </Typography>
            </Stack>
        </Box>
    );
}
