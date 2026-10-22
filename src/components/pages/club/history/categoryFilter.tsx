"use client";

import { Badge, Button, Menu, Stack } from "@mui/material";
import type { MouseEvent, ReactNode } from "react";
import { useCallback, useState } from "react";
import { CategoryMenuItem } from "./categoryMenuItem";
import { FilterList } from "@mui/icons-material";

type CategoryFilterProps = {
    readonly categories: string[];
    readonly selectedCategories: string[];
    readonly onToggle: (category: string) => void;
};

/**
 * A filter component for selecting event categories.
 * @param props - The component props.
 * @param props.categories - The list of all available categories.
 * @param props.selectedCategories - The list of currently selected categories.
 * @param props.onToggle - Callback function to toggle a category's selection.
 * @returns A ReactNode representing the category filter component.
 */
export function CategoryFilter({ categories, selectedCategories: selected, onToggle }: CategoryFilterProps): ReactNode {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const openMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => setAnchor(event.currentTarget), []);
    const closeMenu = useCallback(() => setAnchor(null), []);
    const handleClose = useCallback(() => closeMenu(), [closeMenu]);

    return (
        <Stack sx={{ alignItems: "flex-end", mb: 2 }}>
            <Button
                color="secondary"
                endIcon={selected.length > 0 && (
                    <Badge badgeContent={selected.length} color="primary" sx={{ mx: 2 }} />
                )}
                onClick={openMenu}
                startIcon={<FilterList />}
                sx={{ boxShadow: 2, fontWeight: 700 }}
                variant="contained"
            >
                Filter events
            </Button>

            <Menu
                anchorEl={anchor}
                onClose={handleClose}
                open={Boolean(anchor)}
                slotProps={{ paper: { sx: { borderRadius: 2, minWidth: 220, mt: 1 } } }}
            >
                {categories.map((category) => (
                    <CategoryMenuItem
                        category={category}
                        checked={selected.includes(category)}
                        key={category}
                        onToggle={onToggle}
                    />
                ))}
            </Menu>
        </Stack>
    );
}
