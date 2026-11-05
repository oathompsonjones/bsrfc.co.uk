"use client";

import { Facebook, Instagram, LocalPolice, LocationPin, Mail, Phone, Policy, PrivacyTip, X } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import type { ReactNode } from "react";

const contacts = [
    {
        href: "/location",
        icon: <LocationPin sx={{ fontSize: "1.5em" }} />,
        label: (
            <>
                Silver Leys, Hadham Road,<br />
                Bishop's Stortford, Hertfordshire, CM23 2QE
            </>
        ),
    },
    { href: "/phone", icon: <Phone sx={{ fontSize: "1.5em" }} />, label: "01279 652092" },
    { href: "/mail", icon: <Mail sx={{ fontSize: "1.5em" }} />, label: "secretary@bsrfc.co.uk" },
];

const socials = [
    { href: "/x", icon: <X /> },
    { href: "/instagram", icon: <Instagram /> },
    { href: "/facebook", icon: <Facebook /> },
];

const legalLinks = [
    { href: "/policies/privacy", icon: <Policy sx={{ fontSize: "1.5em" }} />, label: "Privacy Policy" },
    { href: "/policies/terms", icon: <PrivacyTip sx={{ fontSize: "1.5em" }} />, label: "Terms & Conditions" },
    { href: "/policies/safeguarding", icon: <LocalPolice sx={{ fontSize: "1.5em" }} />, label: "Safeguarding Policy" },
];

/**
 * Displays copyright, company, charity, and website credit information.
 * @returns The footer attribution details.
 */
export function Info(): ReactNode {
    const startYear = 2026;
    const currentYear = new Date().getUTCFullYear();
    const copyrightYear = currentYear > startYear
        ? `${startYear}-${currentYear}`
        : `${startYear}`;

    return (
        <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={3}
            sx={{ justifyContent: "space-evenly", width: "100%" }}
        >
            <Stack spacing={3}>
                <Stack spacing={1}>
                    {contacts.map(({ href, icon, label }) => (
                        <Typography
                            component={Link}
                            href={href}
                            key={href}
                            sx={{ alignItems: "center", display: "inline-flex", gap: "0.5em" }}
                            variant="caption"
                        >
                            {icon} {label}
                        </Typography>
                    ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                    {socials.map(({ href, icon }) => (
                        <Typography component={Link} href={href} key={href} variant="caption">
                            {icon}
                        </Typography>
                    ))}
                </Stack>
            </Stack>
            <Stack>
                <Typography variant="caption">© {copyrightYear} Bishop's Stortford Rugby Football Club</Typography>
                <Typography variant="caption">Company No. 09612222</Typography>
                <Typography variant="caption">Charity No. 1162479</Typography>
                {legalLinks.map(({ href, icon, label }) => (
                    <Typography
                        component={Link}
                        href={href}
                        key={href}
                        sx={{ alignItems: "center", display: "inline-flex", gap: "0.5em" }}
                        variant="caption"
                    >
                        {icon} {label}
                    </Typography>
                ))}
            </Stack>
        </Stack>
    );
}
