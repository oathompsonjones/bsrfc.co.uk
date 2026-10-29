import type { MetadataRoute } from "next";
import { teamSections } from "content/teams";

const baseUrl = "https://bsrfc.co.uk";

/**
 * Lists the public site pages for search engine crawlers.
 * @returns The sitemap entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [
        "/",
        "/about",
        "/contact",
        "/history",
        "/news",
        "/teams",
        ...teamSections.flatMap(({ slug, teams }) => [
            `/teams/${slug}`,
            ...teams.map(({ slug: teamSlug }) => `/teams/${slug}/${teamSlug}`),
        ]),
    ];

    return paths.map((path) => ({ url: new URL(path, baseUrl).toString() }));
}
