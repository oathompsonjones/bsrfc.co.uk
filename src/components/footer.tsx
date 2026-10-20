"use client";

import { Box, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Facebook, Instagram, X } from "@mui/icons-material";
import Link from "next/link";
import type { ReactNode } from "react";

const socials = [
    { href: "/x", icon: <X />, label: "X (Twitter)" },
    { href: "/instagram", icon: <Instagram />, label: "Instagram" },
    { href: "/facebook", icon: <Facebook />, label: "Facebook" },
];

const links = [
    { href: "/find-us", label: "Location" },
    { href: "/gms", label: "GMS" },
    { href: "/shop", label: "Shop" },
    { href: "/privacy", label: "Privacy Policy" },
];

const columns: Array<typeof links> = [[], [], []];
const remainder = links.length % 3;
const regularCount = links.length - remainder;
const extras = links.slice(regularCount);

links.slice(0, regularCount).forEach((link, index) => {
    columns[index % 3]!.push(link);
});

if (remainder === 1) {
    columns[1]!.push(extras[0]!);
} else if (remainder === 2) {
    columns[0]!.push(extras[0]!);
    columns[2]!.push(extras[1]!);
}

/**
 * Contains the footer element.
 * @returns The page footer.
 */
export function Footer(): ReactNode {
    const startYear = 2026;
    const currentYear = new Date().getUTCFullYear();
    const copyrightYear = currentYear > startYear
        ? `${startYear}-${currentYear}`
        : `${startYear}`;
    const content = [
        `© ${copyrightYear} Bishop's Stortford Rugby Football Club`,
        "Company No. 09612222",
        "Charity No. 1162479",
    ];

    return (
        <Box component="footer" sx={{ px: { sm: 0, xs: 2 }, py: 1 }}>
            <Divider className="full-width" sx={{ my: 1 }} />
            <Stack spacing={0.5} sx={{ alignItems: "center", textAlign: "center", width: "100%" }}>
                <Stack direction="row" spacing={1}>
                    {socials.map(({ href, icon, label }) => (
                        <IconButton
                            aria-label={label}
                            color="inherit"
                            component="a"
                            href={href}
                            key={href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {icon}
                        </IconButton>
                    ))}
                </Stack>
                <Grid
                    columns={{ sm: 3, xs: 1 }}
                    container
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    sx={{ "& a": { whiteSpace: "nowrap" }, py: 5 }}
                >
                    {columns.map((column, index) => (
                        <Grid
                            key={index}
                            size={1}
                            sx={{
                                alignItems: "center",
                                display: "flex",
                                justifyContent: {
                                    sm: ["flex-end", "center", "flex-start"][index],
                                    xs: "center",
                                },
                                ...index === 0 && { pr: { sm: 10 } },
                                ...index === 2 && { pl: { sm: 10 } },
                            }}
                        >
                            <Stack>
                                {column.map(({ href, label }) => (<Link href={href} key={href}>{label}</Link>))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Stack
                    direction={{ sm: "row", xs: "column" }}
                    divider={
                        <Box
                            component="span"
                            sx={{ color: "lightgrey", display: { sm: "inline", xs: "none" }, px: 1 }}
                        >
                            •
                        </Box>
                    }
                    sx={{ alignItems: "center", maxWidth: "100%" }}
                >
                    {content.map((item) => (
                        <Typography key={item} variant="caption">{item}</Typography>
                    ))}
                </Stack>
                <Typography variant="caption">
                    Website designed & developed by{" "}
                    <strong>
                        <a href="https://oathompsonjones.co.uk">Oliver Jones</a>
                    </strong>
                </Typography>
            </Stack>
        </Box>
    );
}
