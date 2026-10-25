import { Hero } from "components/hero";
import { PageComingSoon } from "components/pageComingSoon";
import type { ReactNode } from "react";
import huddle from "assets/images/1st-xv-huddle.jpg";

/**
 * Introduces the club and its community.
 * @returns The club introduction page.
 */
export default function AboutPage(): ReactNode {
    return (
        <>
            <Hero
                image={{
                    alt: "Bishop's Stortford RFC players together in a huddle",
                    image: huddle,
                }}
                intro="A community rugby club built around our players, families, volunteers, and supporters."
                overline="Bishop's Stortford Rugby Football Club"
                title="About the Club"
            />
            <PageComingSoon />
        </>
    );
}
