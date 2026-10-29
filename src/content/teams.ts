export type TeamPage = {
    slug: string;
    title: string;
};

export type TeamSection = {
    description: string;
    slug: string;
    teams: TeamPage[];
    title: string;
};

export const teamSections: TeamSection[] = [
    {
        description: "The 1st and 2nd XVs",
        slug: "men",
        teams: [
            { slug: "first-xv", title: "1st XV" },
            { slug: "second-xv", title: "2nd XV" },
        ],
        title: "Senior Men",
    },
    {
        description: "The 3rd, 4th, and 5th XVs",
        slug: "social-men",
        teams: [
            { slug: "third-xv", title: "3rd XV" },
            { slug: "fourth-xv", title: "4th XV" },
            { slug: "fifth-xv", title: "5th XV" },
        ],
        title: "Social Men",
    },
    {
        description: "The 1st and 2nd XVs",
        slug: "women",
        teams: [
            { slug: "first-xv", title: "Women's 1st XV" },
            { slug: "second-xv", title: "Women's 2nd XV" },
        ],
        title: "Women",
    },
    {
        description: "Colts rugby, with A and B squads together",
        slug: "colts",
        teams: [],
        title: "Colts",
    },
    {
        description: "Youth rugby by age group, with A and B squads together",
        slug: "youth",
        teams: [
            { slug: "under-18", title: "Under 18s" },
            { slug: "under-16", title: "Under 16s" },
            { slug: "under-15", title: "Under 15s" },
            { slug: "under-14", title: "Under 14s" },
            { slug: "under-13", title: "Under 13s" },
            { slug: "under-12", title: "Under 12s" },
        ],
        title: "Youth",
    },
    {
        description: "Girls rugby by age group",
        slug: "girls",
        teams: [
            { slug: "under-18", title: "Under 18 Girls" },
            { slug: "under-16", title: "Under 16 Girls" },
            { slug: "under-14", title: "Under 14 Girls" },
            { slug: "under-12", title: "Under 12 Girls" },
        ],
        title: "Girls",
    },
    {
        description: "Mini rugby by age group",
        slug: "minis",
        teams: [
            { slug: "under-11", title: "Under 11s" },
            { slug: "under-10", title: "Under 10s" },
            { slug: "under-9", title: "Under 9s" },
            { slug: "under-8", title: "Under 8s" },
            { slug: "under-7", title: "Under 7s" },
            { slug: "under-6", title: "Under 6s" },
        ],
        title: "Minis",
    },
    {
        description: "Mixed touch rugby",
        slug: "touch",
        teams: [],
        title: "Touch",
    },
];

/**
 * Finds a rugby section by its URL slug.
 * @param slug - The section URL slug.
 * @returns The matching section, if present.
 */
export function getTeamSection(slug: string): TeamSection | undefined {
    return teamSections.find((section) => section.slug === slug);
}

/**
 * Finds an individual team by section and team URL slugs.
 * @param sectionSlug - The parent section URL slug.
 * @param teamSlug - The team URL slug.
 * @returns The matching team, if present.
 */
export function getTeam(sectionSlug: string, teamSlug: string): TeamPage | undefined {
    return getTeamSection(sectionSlug)?.teams.find((team) => team.slug === teamSlug);
}
