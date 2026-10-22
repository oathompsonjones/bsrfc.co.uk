"use client";

import { Checkbox, ListItemText, MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { useCallback } from "react";

type CategoryMenuItemProps = {
    readonly category: string;
    readonly checked: boolean;
    readonly onToggle: (category: string) => void;
};

/**
 * Renders a menu item for a category with a checkbox.
 * @param props - The props for the CategoryMenuItem component.
 * @param props.category - The category name.
 * @param props.checked - Whether the category is checked.
 * @param props.onToggle - The function to call when the category is toggled.
 * @returns The rendered menu item for the category.
 */
export function CategoryMenuItem({ category, checked, onToggle }: CategoryMenuItemProps): ReactNode {
    const handleChange = useCallback(() => onToggle(category), [category, onToggle]);

    return (
        <MenuItem onClick={handleChange} value={category}>
            <Checkbox checked={checked} />
            <ListItemText primary={category} />
        </MenuItem>
    );
}
