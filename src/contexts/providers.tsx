"use client";

import type { ReactNode } from "react";
import { ThemeContextProvider } from "./theme";

/**
 * Contains any context providers.
 * @param props - The props to pass to the layout.
 * @param props.children - The children to render.
 * @returns The context providers.
 */
export function Providers({ children }: { children: ReactNode; }): ReactNode {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
}
