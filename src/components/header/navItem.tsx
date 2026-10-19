"use client";

import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useCallback, useEffect, useRef } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

type Props<S> = {
    children: ReactNode;
    href: string;
    label: string;
    menuState: [S, Dispatch<SetStateAction<S>>];
} | {
    href: string;
    label: string;
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

        useEffect(() => {
            if (!isOpen)
                return (): void => undefined;

            const onPointerDown = (event: PointerEvent): void => {
                const target = event.target as Element;

                if (!anchorRef.current || !anchorRef.current.contains(target) && !target.closest(".MuiMenu-paper"))
                    setOpenMenu(null);
            };

            document.addEventListener("pointerdown", onPointerDown);

            return (): void => document.removeEventListener("pointerdown", onPointerDown);
        }, [isOpen, setOpenMenu]);

        const toggleMenu = useCallback(
            (): void => setOpenMenu(openMenu === href.slice(1) ? null : href.slice(1)),
            [setOpenMenu, openMenu, href],
        );
        const closeMenu = useCallback((): void => setOpenMenu(null), [setOpenMenu]);

        return (
            <>
                <ButtonGroup color="inherit" id="button-group" ref={anchorRef} variant="text">
                    <NavItem href={href} label={label} />
                    <Button onClick={toggleMenu} size="small">
                        <KeyboardArrowDown />
                    </Button>
                </ButtonGroup>
                <Menu
                    anchorEl={anchorRef.current}
                    disableEnforceFocus
                    disableScrollLock
                    hideBackdrop
                    onClick={closeMenu}
                    onClose={closeMenu}
                    open={isOpen}
                    slotProps={{
                        list: { disablePadding: true },
                        paper: { sx: { backgroundColor: "primary.main", pointerEvents: "auto" } },
                        root: { sx: { pointerEvents: "none" } },
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
        <Button color="inherit" href={href} variant="text">
            {label}
        </Button>
    );
}
