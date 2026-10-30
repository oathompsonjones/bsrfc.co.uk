"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { JoinCallout } from "components/pages/home/joinCallout";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Homepage introduction with links into the club.
 * @returns The introduction section.
 */
export function ClubIntroduction(): ReactNode {
    return (
        <Box className="full-width" component="section" sx={{ color: "common.white", pb: { md: 10, xs: 7 } }}>
            <Box sx={{ maxWidth: "70rem", mx: "auto", px: { md: 5, xs: 3 }, width: "100%" }}>
                <Stack
                    direction={{ md: "row", xs: "column" }}
                    spacing={{ md: 6, xs: 2 }}
                    sx={{
                        alignItems: { md: "flex-end", xs: "flex-start" },
                        justifyContent: "space-between",
                        mb: 5,
                    }}
                >
                    <Box>
                        <Typography
                            component="p"
                            sx={{
                                color: "secondary.main",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "0.16em",
                            }}
                            variant="overline"
                        >
                            MORE THAN A GAME
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{
                                color: "common.white",
                                fontSize: { md: "2.8rem", xs: "2.2rem" },
                                fontWeight: 800,
                                letterSpacing: "-0.04em",
                                lineHeight: 1.1,
                                mt: 1,
                            }}
                            variant="h2"
                        >
                            Find your place at the club.
                        </Typography>
                    </Box>
                    <Stack spacing={1.5} sx={{ maxWidth: "31rem" }}>
                        <Typography sx={{ color: "lightgrey", lineHeight: 1.8 }} variant="body1">
                            Whether you&apos;re ready to play, cheering from the touchline or looking to get involved,
                            there&apos;s a warm welcome waiting at BSRFC.
                        </Typography>
                        <Button
                            component={Link}
                            endIcon={<ArrowForward />}
                            href="/about"
                            sx={{ alignSelf: "flex-start", border: "1px solid lightgrey", px: 2 }}
                        >
                            About the club
                        </Button>
                    </Stack>
                </Stack>

                <JoinCallout />
            </Box>
        </Box>
    );
}
