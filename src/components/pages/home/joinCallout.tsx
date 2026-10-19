"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Join-the-club callout at the end of the homepage.
 * @returns The membership callout.
 */
export function JoinCallout(): ReactNode {
    const theme = useTheme();
    const calloutCopyColor = alpha(theme.palette.common.white, 0.78);

    return (
        <Stack
            direction={{ sm: "row", xs: "column" }}
            spacing={3}
            sx={{
                alignItems: { sm: "center", xs: "flex-start" },
                bgcolor: alpha(theme.palette.background.paper, 0.76),
                border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
                justifyContent: "space-between",
                mt: 5,
                p: { md: 4, xs: 3 },
            }}
        >
            <Box>
                <Typography component="h3" sx={{ color: "common.white", fontWeight: 750 }} variant="h5">
                    Ready to be part of it?
                </Typography>
                <Typography sx={{ color: calloutCopyColor, mt: 0.75 }} variant="body2">
                    There&apos;s a place for you at Bishop&apos;s Stortford RFC.
                </Typography>
            </Box>
            <Button
                component={Link}
                endIcon={<ArrowForward />}
                href="/membership/join"
                sx={{
                    bgcolor: "common.white",
                    color: theme.palette.primary.main,
                    flexShrink: 0,
                    fontWeight: 700,
                    px: 2.5,
                    py: 1.25,
                }}
            >
                Join the club
            </Button>
        </Stack>
    );
}
