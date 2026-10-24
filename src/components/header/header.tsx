"use client";

import { AppBar, Box, Drawer, IconButton, List, Toolbar } from "@mui/material";
import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileNavItem } from "./mobileNavItem";
import { NavItem } from "./navItem";
import type { ReactNode } from "react";
import { useNavScroll } from "hooks/useNavScroll";

export type NavItemData = {
    href: string;
    label: string;
    links?: Array<{ href: string; label: string; }>;
};

const logoSize = 150;
const navItems: NavItemData[] = [
    { href: "/", label: "Home" },
    {
        href: "/club",
        label: "Club",
        links: [
            { href: "/about", label: "About the Club" },
            { href: "/committee", label: "Committee" },
            { href: "/history", label: "Club History" },
            { href: "/contact", label: "Contact" },
            { href: "/safeguarding", label: "Safeguarding & Policies" },
            { href: "/find-us", label: "Find Us" },
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
            { href: "/match-reports", label: "Match Reports" },
            { href: "/gallery", label: "Gallery" },
            { href: "/highlights", label: "Highlights" },
        ],
    },
    {
        href: "/membership",
        label: "Membership",
        links: [
            { href: "/membership", label: "Membership Information" },
            { href: "/join", label: "Join the Club" },
            { href: "/volunteers", label: "Volunteers" },
        ],
    },
    {
        href: "/events",
        label: "Events",
        links: [
            { href: "/events", label: "Upcoming Events" },
            { href: "/venue-hire", label: "Venue Hire" },
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
    // eslint-disable-next-line react/hook-use-state
    const menuState = useState<string | null>(null);
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
                            display: { lg: "block", xs: "none" },
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontStyle: "italic",
                            fontWeight: 900,
                            left: "-1rem",
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
                            ? <NavItem href={href} key={href} label={label} menuState={menuState}>{links}</NavItem>
                            : <NavItem href={href} key={href} label={label} />
                    ))}
                </Toolbar>
                <Toolbar
                    className="full-width"
                    sx={{
                        display: { lg: "none", xs: "flex" },
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        component="p"
                        sx={{ fontSize: "1.5rem", fontStyle: "italic", fontWeight: 900, lineHeight: 1, m: 0 }}
                    >
                        BETA
                    </Box>
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
