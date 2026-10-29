import { getTeamSection, teamSections } from "content/teams";
import { Hero } from "components/hero";
import { PageCms } from "components/pageCms";
import type { ReactNode } from "react";
import { TeamSection } from "components/pages/teams/teamSection";
import huddle from "assets/images/1st-xv-huddle.jpg";
import { notFound } from "next/navigation";

type SectionPageProps = {
    readonly params: Promise<{ section: string; }>;
};

export const dynamicParams = false;

/**
 * Generates static routes for every rugby section.
 * @returns The section route parameters.
 */
export function generateStaticParams(): Array<{ section: string; }> {
    return teamSections.map(({ slug }) => ({ section: slug }));
}

/**
 * Shows a rugby section overview and CMS placeholder.
 * @param props - Contains the URL segment used to select a section and its team links.
 * @returns The section page.
 */
export default async function SectionRoute(props: SectionPageProps): Promise<ReactNode> {
    const { params } = props;
    const { section: slug } = await params;
    const section = getTeamSection(slug);

    if (section === undefined)
        notFound();

    const teamRows: Array<Array<{ link: string; title: string; }>> = [];

    for (let index = 0; index < section.teams.length; index += 3) {
        teamRows.push(section.teams.slice(index, index + 3).map((team) => ({
            link: `/teams/${section.slug}/${team.slug}`,
            title: team.title,
        })));
    }

    return (
        <>
            <Hero
                image={{ alt: "Bishop's Stortford RFC players together in a huddle", image: huddle }}
                intro={section.description}
                overline="Bishop's Stortford RFC"
                title={section.title}
            />
            {teamRows.length > 0 && <TeamSection teams={teamRows} title={`${section.title} teams`} />}
            <PageCms pageTitle={section.title} />
        </>
    );
}
