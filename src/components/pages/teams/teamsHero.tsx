import { Hero } from "components/hero";
import type { ReactNode } from "react";
import firstXv from "assets/images/1st-xv-26-27.jpg";

/**
 * Displays the teams page introduction through the shared hero component.
 * @returns The teams page hero.
 */
export function TeamsHero(): ReactNode {
    return (
        <Hero
            image={{ alt: "Bishop's Stortford RFC first XV, 2026–27 season", image: firstXv }}
            intro="From first steps on the pitch to senior rugby, there's a place for everyone at Bishop's Stortford."
            overline="#OneClub"
            title="Our Teams"
        />
    );
}
