"use client";

import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useEffect, useRef } from "react";

type Props<S> = {
    href: string;
    label: string;
} | {
    children: ReactNode;
    href: string;
    label: string;
    menuState: [S, Dispatch<SetStateAction<S>>];
};

/**
 * Contains the navigation bar link element.
 * @param props - The properties of the component.
 * @param props.children - The dropdown menu items.
 * @param props.href - The href of the navigation bar link.
 * @param props.label - The label of the navigation bar link.
 * @returns The navigation bar link element.
 */
export function NavItem(props: Props<string | null>): ReactNode {
    if ("children" in props) {
        const { children, href, label, menuState } = props;
        const [openMenu, setOpenMenu] = menuState;
        const anchorRef = useRef<HTMLDivElement>(null);
        const isOpen = openMenu === href.slice(1);

        // The menu's modal layer ignores pointer events so other nav buttons stay clickable, so close on outside presses here.
        useEffect(() => {
            if (!isOpen) return undefined;
            const onPointerDown = (event: PointerEvent): void => {
                const target = event.target as Element;
                if (!anchorRef.current?.contains(target) && !target.closest(".MuiMenu-paper")) setOpenMenu(null);
            };
            document.addEventListener("pointerdown", onPointerDown);
            return () => document.removeEventListener("pointerdown", onPointerDown);
        }, [isOpen, setOpenMenu]);

        return (
            <>
                <ButtonGroup variant="text" color="inherit" ref={anchorRef} id="button-group">
                    <NavItem label={label} href={href} />
                    <Button onClick={() => setOpenMenu(openMenu === href.slice(1) ? null : href.slice(1))} size="small">
                        <KeyboardArrowDown />
                    </Button>
                </ButtonGroup>
                <Menu
                    open={isOpen}
                    anchorEl={anchorRef.current}
                    hideBackdrop
                    disableScrollLock
                    disableEnforceFocus
                    onClose={() => setOpenMenu(null)}
                    onClick={() => setOpenMenu(null)}
                    slotProps={{
                        list: { disablePadding: true },
                        paper: { sx: { backgroundColor: "primary.main", pointerEvents: "auto" } },
                        root: { sx: { pointerEvents: "none" } }
                    }}
                >
                    {[children].flat().map((child, index) => (
                        <MenuItem key={index}>
                            {child}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        );
    }

    const { href, label } = props;
    return (
        <Button variant="text" color="inherit" href={href}>
            {label}
        </Button>
    );
}
