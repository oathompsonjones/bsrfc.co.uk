import type { MetadataRoute } from "next";

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
        "/teams/men",
        "/teams/women",
        "/teams/colts",
        "/teams/youth",
        "/teams/girls",
        "/teams/minis",
        "/teams/touch",
    ];

    return paths.map((path) => ({ url: new URL(path, baseUrl).toString() }));
}
