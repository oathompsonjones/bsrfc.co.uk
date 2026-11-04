import type { ReactNode } from "react";

export type TeamPage = {
    slug: string;
    title: NonNullable<ReactNode>;
    subtitle?: ReactNode;
};

export type TeamSection = {
    subtitle?: NonNullable<ReactNode>;
    slug: string;
    teams: TeamPage[];
    title: NonNullable<ReactNode>;
};

export const teamSections: TeamSection[] = [
    {
        slug: "men",
        subtitle: <>The 1<sup>st</sup> and 2<sup>nd</sup> XVs</>,
        teams: [
            { slug: "first-xv", title: "1st XV" },
            { slug: "second-xv", subtitle: "The Blues", title: "2nd XV" },
        ],
        title: "Senior Men",
    },
    {
        slug: "social-men",
        subtitle: <>The 3<sup>rd</sup>, 4<sup>th</sup>, and 5<sup>th</sup> XVs</>,
        teams: [
            { slug: "third-xv", subtitle: "The Mitres", title: "3rd XV" },
            { slug: "fourth-xv", subtitle: "The Chindits", title: "4th XV" },
            { slug: "fifth-xv", subtitle: "The Abbotts", title: "5th XV" },
        ],
        title: "Social Men",
    },
    {
        slug: "women",
        subtitle: <>The 1<sup>st</sup> and 2<sup>nd</sup> XVs</>,
        teams: [
            { slug: "first-xv", title: "Women's 1st XV" },
            { slug: "second-xv", title: "Women's 2nd XV" },
        ],
        title: "Women",
    },
    {
        slug: "colts",
        subtitle: "Under 17s and Under 18s",
        teams: [],
        title: "Colts",
    },
    {
        slug: "youth",
        subtitle: "Under 12s to Under 16s",
        teams: [
            { slug: "under-16", title: "Under 16s" },
            { slug: "under-15", title: "Under 15s" },
            { slug: "under-14", title: "Under 14s" },
            { slug: "under-13", title: "Under 13s" },
            { slug: "under-12", title: "Under 12s" },
        ],
        title: "Youth",
    },
    {
        slug: "girls",
        subtitle: "Under 12s to Under 18s",
        teams: [
            { slug: "under-18", title: "Under 18 Girls" },
            { slug: "under-16", title: "Under 16 Girls" },
            { slug: "under-14", title: "Under 14 Girls" },
            { slug: "under-12", title: "Under 12 Girls" },
        ],
        title: "Girls",
    },
    {
        slug: "minis",
        subtitle: "Under 6s to Under 11s",
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
        slug: "touch",
        subtitle: "Mixed touch rugby",
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
