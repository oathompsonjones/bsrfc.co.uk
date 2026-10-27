import type { ReactNode } from "react";

/**
 * Passes through the route's content so route layouts can export metadata.
 * @param props - The layout props, in this case just children.
 * @param props.children - The route content.
 * @returns The route content.
 */
export function PageLayout({ children }: { readonly children: ReactNode; }): ReactNode {
    return children;
}
