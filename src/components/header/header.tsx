"use client";

import { AppBar, Box, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./navItem";
import type { ReactNode } from "react";
import { useNavScroll } from "hooks/useNavScroll";
import { Fragment, useState } from "react";

const logoSize = 150;
const mobileNavItems: { href: string; label: string; links?: { href: string; label: string; }[]; }[] = [
    { href: "/", label: "Home" },
    {
        href: "/club",
        label: "Club",
        links: [
            { href: "/club/about", label: "About the Club" },
            { href: "/club/committee", label: "Committee" },
            { href: "/club/history", label: "Club History" },
            { href: "/club/contact", label: "Contact" },
            { href: "/club/safeguarding", label: "Safeguarding & Policies" },
            { href: "/club/find-us", label: "Find Us" },
        ],
    },
    {
        href: "/teams",
        label: "Teams",
        links: [
            { href: "/teams/men", label: "Men" },
            { href: "/teams/women", label: "Women" },
            { href: "/teams/colts", label: "Colts" },
            { href: "/teams/youth", label: "Youth" },
            { href: "/teams/womens-youth", label: "Women's Youth" },
            { href: "/teams/minis", label: "Minis" },
            { href: "/teams/touch", label: "Touch" },
        ],
    },
    {
        href: "/news",
        label: "News & Media",
        links: [
            { href: "/news", label: "News" },
            { href: "/news/match-reports", label: "Match Reports" },
            { href: "/gallery", label: "Gallery" },
            { href: "/highlights", label: "Highlights" },
        ],
    },
    {
        href: "/membership",
        label: "Membership",
        links: [
            { href: "/membership/join", label: "Join the Club" },
            { href: "/membership", label: "Membership Information" },
            { href: "/membership/volunteers", label: "Volunteers" },
        ],
    },
    {
        href: "/events",
        label: "Events",
        links: [
            { href: "/events", label: "Upcoming Events" },
            { href: "/events/clubhouse", label: "Clubhouse" },
            { href: "/events/venue-hire", label: "Venue Hire" },
        ],
    },
    { href: "https://bsrfcshop.co.uk", label: "Shop" },
    { href: "https://bsrfc.club", label: "Sponsors" },
];

/**
 * Contains the header element.
 * @returns The page header.
 */
export function Header(): ReactNode {
    const menuState = useState<string | null>(null);
    const { navHidden, navJs } = useNavScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <AppBar
                component="header"
                position="static"
                enableColorOnDark
                elevation={0}
                className="site-header p-4 pb-0"
            >
                <div className="site-logo flex items-start justify-center" style={{ height: logoSize }}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={logoSize}
                        height={logoSize}
                    />
                </div>
            </AppBar>
            <AppBar
                component="nav"
                position="sticky"
                enableColorOnDark
                elevation={0}
                className="site-nav"
                data-js={navJs ? "" : undefined}
                style={{
                    boxShadow: "0 4px 6px -2px rgb(0 0 0 / 0.4)",
                    ...navJs && { transform: navHidden ? "translateY(calc(-100% - 12px))" : "none" }
                }}
            >
                <Toolbar className="flex flex-row flex-wrap gap-4 justify-center full-width" sx={{ display: { xs: "none", lg: "flex" } }}>
                    <NavItem label="Home" href="/" />

                    <NavItem label="Club" href="/club" menuState={menuState}>
                        <Link href="/club/about">About the Club</Link>
                        <Link href="/club/committee">Committee</Link>
                        <Link href="/club/history">Club History</Link>
                        <Link href="/club/contact">Contact</Link>
                        <Link href="/club/safeguarding">Safeguarding & Policies</Link>
                        <Link href="/club/find-us">Find Us</Link>
                    </NavItem>

                    <NavItem label="Teams" href="/teams" menuState={menuState}>
                        <Link href="/teams/men">Men</Link>
                        <Link href="/teams/women">Women</Link>
                        <Link href="/teams/colts">Colts</Link>
                        <Link href="/teams/youth">Youth</Link>
                        <Link href="/teams/womens-youth">Women's Youth</Link>
                        <Link href="/teams/minis">Minis</Link>
                        <Link href="/teams/touch">Touch</Link>
                    </NavItem>

                    <NavItem label="News & Media" href="/news" menuState={menuState}>
                        <Link href="/news">News</Link>
                        <Link href="/news/match-reports">Match Reports</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/highlights">Highlights</Link>
                    </NavItem>

                    <NavItem label="Membership" href="/membership" menuState={menuState}>
                        <Link href="/membership/join">Join the Club</Link>
                        <Link href="/membership">Membership Information</Link>
                        <Link href="/membership/volunteers">Volunteers</Link>
                    </NavItem>

                    <NavItem label="Events" href="/events" menuState={menuState}>
                        <Link href="/events">Upcoming Events</Link>
                        <Link href="/events/clubhouse">Clubhouse</Link>
                        <Link href="/events/venue-hire">Venue Hire</Link>
                    </NavItem>

                    <NavItem label="Shop" href="https://bsrfcshop.co.uk" />

                    <NavItem label="Sponsors" href="https://bsrfc.club" />
                </Toolbar>
                <Toolbar className="full-width" sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "flex-end" }}>
                    <IconButton
                        aria-label="Open navigation menu"
                        aria-expanded={mobileMenuOpen}
                        color="inherit"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                slotProps={{ paper: { sx: { backgroundColor: "primary.main", width: "min(88vw, 360px)" } } }}
            >
                <Box role="presentation">
                    <Toolbar sx={{ justifyContent: "flex-end" }}>
                        <IconButton aria-label="Close navigation menu" color="inherit" onClick={() => setMobileMenuOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                    <List disablePadding>
                        {mobileNavItems.map((item) => (
                            <Fragment key={item.href}>
                                <ListItemButton
                                    component={Link}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)", color: "common.white" }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                                {item.links && (
                                    <List disablePadding>
                                        {item.links.map((link) => (
                                            <ListItemButton
                                                key={link.href}
                                                component={Link}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                sx={{ pl: 4, color: "common.white" }}
                                            >
                                                <ListItemText primary={link.label} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                )}
                            </Fragment>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
