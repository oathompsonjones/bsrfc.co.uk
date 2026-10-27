export const SITE_TITLE = "BSRFC";

/**
 * Creates a page title using the club name.
 * @param page - The page name.
 * @returns The formatted page title.
 */
export function getPageTitle(page: string): string {
    return `${SITE_TITLE} | ${page}`;
}
