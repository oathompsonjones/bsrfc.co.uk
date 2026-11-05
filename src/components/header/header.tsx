"use client";

import { AppBar, Box, Drawer, IconButton, List, Toolbar } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useCallback, useState } from "react";
import Image from "next/image";
import { MobileNavItem } from "./mobileNavItem";
import { NavItem } from "./navItem";
import type { ReactNode } from "react";
import { useNavScroll } from "hooks/useNavScroll";

export type NavItemLink = {
    external?: boolean;
    href: string;
    label: string;
};
export type NavItemData = NavItemLink & {
    children?: NavItemLink[];
};

const logoSize = 150;
const navItems: NavItemData[] = [
    { href: "/", label: "Home" },
    {
        children: [
            { href: "/contact", label: "Contact" },
            { href: "/history", label: "History" },
            { href: "/safeguarding", label: "Safeguarding" },
            { href: "/find-us", label: "Find Us" },
        ],
        href: "/about",
        label: "Club",
    },
    {
        children: [
            { href: "/teams/men", label: "Senior Men" },
            { href: "/teams/social-men", label: "Social Men" },
            { href: "/teams/women", label: "Women" },
            { href: "/teams/colts", label: "Colts" },
            { href: "/teams/youth", label: "Youth" },
            { href: "/teams/girls", label: "Girls" },
            { href: "/teams/minis", label: "Minis" },
            { href: "/teams/touch", label: "Touch" },
        ],
        href: "/teams",
        label: "Teams",
    },
    {
        children: [
            { href: "/match-reports", label: "Match Reports" },
            { href: "/highlights", label: "Highlights" },
            { href: "/gallery", label: "Gallery" },
        ],
        href: "/news",
        label: "News",
    },
    {
        children: [
            { href: "/join", label: "Join" },
            { href: "/volunteers", label: "Volunteers" },
            { external: true, href: "/gms", label: "GMS" },
        ],
        href: "/membership",
        label: "Membership",
    },
    {
        children: [{ href: "/venue-hire", label: "Venue Hire" }],
        href: "/events",
        label: "Events",
    },
    { external: true, href: "/shop", label: "Shop" },
    { external: true, href: "/sponsors", label: "Sponsors" },
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
                    {navItems.map(({ href, label, children, external }) => (
                        children
                            ? <NavItem href={href} key={href} label={label} menuState={menuState}>{children}</NavItem>
                            : <NavItem external={external ?? false} href={href} key={href} label={label} />
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
                        <Menu />
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
                            <Close />
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
