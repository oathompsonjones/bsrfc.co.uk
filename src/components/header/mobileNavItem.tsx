import { Collapse, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore, OpenInNew } from "@mui/icons-material";
import { memo, useCallback } from "react";
import Link from "next/link";
import type { NavItemData } from "./header";
import type { ReactNode } from "react";

type Props = {
    readonly expanded: boolean;
    readonly item: NavItemData;
    readonly onNavigate: () => void;
    readonly onToggle: (href: string) => void;
};

/**
 * A single row in the mobile navigation drawer, with a collapsible list of sub-links.
 * @param props - The properties of the component.
 * @param props.expanded - Whether the sub-links are shown.
 * @param props.item - The navigation item to render.
 * @param props.onNavigate - Called when a link is followed.
 * @param props.onToggle - Called with the item's href when its expand button is pressed.
 * @returns The drawer row.
 */
function MobileNavItemBase({ expanded, item, onNavigate, onToggle }: Props): ReactNode {
    const handleToggle = useCallback(() => onToggle(item.href), [onToggle, item.href]);

    return (
        <>
            <ListItem
                disablePadding
                secondaryAction={item.children
                    ? (
                        <IconButton color="inherit" edge="end" onClick={handleToggle}>
                            {expanded ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    )
                    : null}
                sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}
            >
                <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={onNavigate}
                    sx={{ color: "common.white" }}
                >
                    <ListItemText primary={item.label} />
                    {item.external ?? false ? <OpenInNew fontSize="small" /> : null}
                </ListItemButton>
            </ListItem>
            {item.children
                ? (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {item.children.map((link) => (
                                <ListItemButton
                                    component={Link}
                                    href={link.href}
                                    key={link.href}
                                    onClick={onNavigate}
                                    sx={{ color: "common.white", pl: 4 }}
                                >
                                    <ListItemText primary={link.label} />
                                    {link.external ?? false ? <OpenInNew fontSize="small" sx={{ ml: 1 }} /> : null}
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                )
                : null}
        </>
    );
}

export const MobileNavItem = memo(MobileNavItemBase);
