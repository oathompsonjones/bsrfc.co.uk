import { Box, Paper, Stack, Typography } from "@mui/material";
import type { Event } from "pages/club/history/page";
import type { ReactNode } from "react";

/**
 * Renders a timeline of history events filtered by categories.
 * @param props - The component props.
 * @param props.events - The list of history events.
 * @param props.categories - The selected categories for filtering events.
 * @returns The rendered timeline component.
 */
export function Timeline({ events, categories }: Readonly<{ events: Event[]; categories: string[]; }>): ReactNode {
    return (
        <Box
            sx={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "&::before": {
                    bgcolor: "secondary.main",
                    borderRadius: 2,
                    bottom: 12,
                    content: "\"\"",
                    left: { md: 15, xs: 10 },
                    position: "absolute",
                    top: 12,
                    width: 3,
                },
                position: "relative",
            }}
        >
            <Stack spacing={4}>
                {events.filter((event) => categories.length === 0 ||
                            event.categories.some((category) => categories.includes(category)))
                    .map((event, i) => (
                        <Box key={i} sx={{ pl: { md: 6, xs: 4 }, position: "relative" }}>
                            <Box
                                sx={{
                                    bgcolor: "primary.main",
                                    border: "4px solid",
                                    borderColor: "secondary.main",
                                    borderRadius: "50%",
                                    height: 17,
                                    left: { md: 8, xs: 3 },
                                    position: "absolute",
                                    top: 5,
                                    width: 17,
                                }}
                            />

                            <Paper sx={{ borderRadius: 2, p: { md: 3.5, xs: 2.5 } }}>
                                <Stack spacing={1.5}>
                                    <Typography
                                        color="primary.main"
                                        sx={{ fontWeight: 800, letterSpacing: 1.5, lineHeight: 1.5 }}
                                        variant="overline"
                                    >
                                        {event.year}
                                    </Typography>

                                    <Typography
                                        component="h2"
                                        sx={{ fontSize: { md: "1.5rem", xs: "1.2rem" }, fontWeight: 700 }}
                                        variant="h5"
                                    >
                                        {event.title}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }} variant="body1">
                                        {event.description}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Box>
                    ))}
            </Stack>
        </Box>
    );
}
