import { Facebook, Instagram, X } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import type { ReactNode } from "react";

const socials = [
    { href: "/x", icon: <X />, label: "X (Twitter)" },
    { href: "/instagram", icon: <Instagram />, label: "Instagram" },
    { href: "/facebook", icon: <Facebook />, label: "Facebook" },
];

/**
 * Displays the club's social links.
 * @returns The social links.
 */
export function Socials(): ReactNode {
    return (
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
    );
}
