import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import { Fragment } from "react";
import Instagram from "@mui/icons-material/Instagram";
import type { ReactNode } from "react";
import XIcon from "@mui/icons-material/X";

const socials = [
    { href: "https://x.com/BSRUGBY", icon: <XIcon />, label: "X (Twitter)" },
    { href: "https://www.instagram.com/bsrfc", icon: <Instagram />, label: "Instagram" },
    { href: "https://www.facebook.com/BishopsStortfordRugbyClub", icon: <Facebook />, label: "Facebook" },
];

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
                <Stack
                    direction={{ sm: "row", xs: "column" }}
                    sx={{ alignItems: "center", maxWidth: "100%" }}
                >
                    {content.map((item, index) => (
                        <Fragment key={item}>
                            {index > 0 && (
                                <Box
                                    component="span"
                                    sx={{
                                        color: "lightgrey",
                                        display: { sm: "inline", xs: "none" },
                                        px: 1,
                                    }}
                                >
                                    •
                                </Box>
                            )}
                            <Typography variant="caption">{item}</Typography>
                        </Fragment>
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
