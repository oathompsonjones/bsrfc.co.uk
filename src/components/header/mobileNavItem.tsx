import { Collapse, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { memo, useCallback } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import type { NavItemData } from "./header";
import OpenInNew from "@mui/icons-material/OpenInNew";
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
                secondaryAction={item.links
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
                    {(/^https?:\/\//u).test(item.href) ? <OpenInNew fontSize="small" /> : null}
                </ListItemButton>
            </ListItem>
            {item.links
                ? (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {item.links.map((link) => (
                                <ListItemButton
                                    component={Link}
                                    href={link.href}
                                    key={link.href}
                                    onClick={onNavigate}
                                    sx={{ color: "common.white", pl: 4 }}
                                >
                                    <ListItemText primary={link.label} />
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
