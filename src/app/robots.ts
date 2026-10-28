import type { MetadataRoute } from "next";

/**
 * Defines crawler access and points crawlers to the sitemap.
 * @returns The robots.txt rules.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: "/",
            disallow: "/api/",
            userAgent: "*",
        },
        sitemap: "https://bsrfc.co.uk/sitemap.xml",
    };
}
