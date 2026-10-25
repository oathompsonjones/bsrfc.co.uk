import { Hero } from "components/hero";
import { PageComingSoon } from "components/pageComingSoon";
import type { ReactNode } from "react";
import leicester from "assets/images/1st-xv-leicester.jpg";

/**
 * Introduces club news and match updates.
 * @returns The club news and media page.
 */
export default function NewsPage(): ReactNode {
    return (
        <>
            <Hero
                image={{ alt: "Bishop's Stortford RFC players celebrating on the pitch", image: leicester }}
                intro="Club announcements, match reports, and stories from across Bishop’s Stortford RFC."
                overline="Latest from the club"
                title="News & Media"
            />
            <PageComingSoon />
        </>
    );
}
