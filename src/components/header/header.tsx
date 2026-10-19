"use client";

import { AppBar, Box, Drawer, IconButton, List, Toolbar } from "@mui/material";
import { MobileNavItem, type NavItemData } from "./mobileNavItem";
import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItem } from "./navItem";
import type { ReactNode } from "react";
import { useNavScroll } from "hooks/useNavScroll";

const logoSize = 150;
const navItems: NavItemData[] = [
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
            { href: "/teams/girls", label: "Girls" },
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
    const [menu, setMenu] = useState<string | null>(null);
    const { navHidden, navJs } = useNavScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
    const toggleExpandedItem = useCallback((href: string) => {
        setExpandedItem((current) => (current === href ? null : href));
    }, []);

    return (
        <>
            <AppBar
                className="site-header"
                component="header"
                elevation={0}
                enableColorOnDark
                position="static"
            >
                <Box
                    className="site-logo"
                    sx={{
                        alignItems: "flex-start",
                        display: "flex",
                        height: logoSize,
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <Box
                        className="site-beta"
                        component="p"
                        sx={{
                            color: "common.white",
                            fontSize: { sm: "clamp(2.5rem, 5vw, 4rem)", xs: "2rem" },
                            fontWeight: 900,
                            left: { sm: "-1rem", xs: 0 },
                            lineHeight: 1,
                            m: 0,
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    >
                        BETA
                    </Box>
                    <Image
                        alt="Logo"
                        className="site-logo-image"
                        height={logoSize}
                        src="/logo.svg"
                        width={logoSize}
                    />
                </Box>
            </AppBar>
            <AppBar
                className="site-nav"
                component="nav"
                data-js={navJs ? "" : undefined}
                elevation={0}
                enableColorOnDark
                position="sticky"
                style={{
                    boxShadow: "0 4px 6px -2px rgb(0 0 0 / 0.4)",
                    ...navJs && { transform: navHidden ? "translateY(calc(-100% - 12px))" : "none" },
                }}
            >
                <Toolbar
                    className="full-width"
                    sx={{
                        display: { lg: "flex", xs: "none" },
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    {navItems.map(({ href, label, links }) => (
                        links
                            ? (
                                <NavItem href={href} key={href} label={label} menuState={[menu, setMenu]}>
                                    {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
                                </NavItem>
                            )
                            : <NavItem href={href} key={href} label={label} />
                    ))}
                </Toolbar>
                <Toolbar
                    className="full-width"
                    sx={{
                        display: { lg: "none", xs: "flex" },
                        justifyContent: "flex-end",
                    }}
                >
                    <IconButton color="inherit" onClick={openMobileMenu}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                onClose={closeMobileMenu}
                open={mobileMenuOpen}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "primary.main",
                            color: "common.white",
                            width: "min(88vw, 360px)",
                        },
                    },
                }}
            >
                <Box role="presentation">
                    <Toolbar sx={{ justifyContent: "flex-end" }}>
                        <IconButton color="inherit" onClick={closeMobileMenu}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                    <List disablePadding>
                        {navItems.map((item) => (
                            <MobileNavItem
                                expanded={expandedItem === item.href}
                                item={item}
                                key={item.href}
                                onNavigate={closeMobileMenu}
                                onToggle={toggleExpandedItem}
                            />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
