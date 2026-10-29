import { getTeam, getTeamSection, teamSections } from "content/teams";
import { Hero } from "components/hero";
import { PageCms } from "components/pageCms";
import type { ReactNode } from "react";
import huddle from "assets/images/1st-xv-huddle.jpg";
import { notFound } from "next/navigation";

type TeamPageProps = {
    readonly params: Promise<{ section: string; team: string; }>;
};

export const dynamicParams = false;

/**
 * Generates static routes for every individual team page.
 * @returns The team route parameters.
 */
export function generateStaticParams(): Array<{ section: string; team: string; }> {
    return teamSections.flatMap(({ slug: section, teams }) => teams.map(({ slug: team }) => ({ section, team })));
}

/**
 * Shows an individual team page with a CMS placeholder.
 * @param props - Contains the URL segments used to identify a team's section and page.
 * @returns The team page.
 */
export default async function TeamRoute(props: TeamPageProps): Promise<ReactNode> {
    const { params } = props;
    const { section: sectionSlug, team: teamSlug } = await params;
    const section = getTeamSection(sectionSlug);
    const team = getTeam(sectionSlug, teamSlug);

    if (section === undefined || team === undefined)
        notFound();

    const title = `${section.title}: ${team.title}`;

    return (
        <>
            <Hero
                image={{ alt: "Bishop's Stortford RFC players together in a huddle", image: huddle }}
                intro={section.title}
                overline="Bishop's Stortford RFC"
                title={team.title}
            />
            <PageCms pageTitle={title} />
        </>
    );
}
