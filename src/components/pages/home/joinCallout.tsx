import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Join-the-club callout at the end of the homepage.
 * @returns The membership callout.
 */
export function JoinCallout(): ReactNode {
    return (
        <Stack
            component={Paper}
            direction={{ sm: "row", xs: "column" }}
            spacing={3}
            sx={{
                alignItems: { sm: "center", xs: "flex-start" },
                justifyContent: "space-between",
                mt: 5,
                p: { md: 4, xs: 3 },
            }}
        >
            <Box>
                <Typography component="h3" sx={{ color: "common.white", fontWeight: 750 }} variant="h5">
                    Ready to be part of it?
                </Typography>
                <Typography sx={{ color: "lightgrey", mt: 0.75 }} variant="body2">
                    There&apos;s a place for you at Bishop&apos;s Stortford RFC.
                </Typography>
            </Box>
            <Button
                color="secondary"
                component={Link}
                endIcon={<ArrowForward />}
                href="/membership/join"
                sx={{
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
