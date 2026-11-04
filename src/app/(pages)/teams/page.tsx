import { Hero } from "components/hero";
import type { ReactNode } from "react";
import { TeamSection } from "components/pages/teams/teamSection";
import huddle from "assets/images/1st-xv-huddle.jpg";
import { teamSections } from "content/teams";

/**
 * Lists the club's rugby sections.
 * @returns The teams directory page.
 */
export default function Teams(): ReactNode {
    const rows = [
        teamSections.slice(0, 4).map((section) => ({ ...section, link: `/teams/${section.slug}` })),
        teamSections.slice(4).map((section) => ({ ...section, link: `/teams/${section.slug}` })),
    ];

    return (
        <>
            <Hero
                image={{ alt: "Bishop's Stortford RFC players together in a huddle", image: huddle }}
                intro="Find the section of the club that suits you, then explore its teams."
                overline="Rugby at Bishop's Stortford"
                title="Our teams"
            />
            <TeamSection teams={rows} title="Explore our sections" />
        </>
    );
}
