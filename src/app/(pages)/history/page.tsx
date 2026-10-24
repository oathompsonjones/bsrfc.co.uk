"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { CategoryFilter } from "components/pages/history/categoryFilter";
import type { ReactNode } from "react";
import { Timeline } from "components/pages/history/timeline";

export type Event = {
    categories: string[];
    description: ReactNode;
    title: ReactNode;
    year: string;
};

const events: Event[] = [
    {
        categories: ["Club heritage"],
        description: (
            <>
                Bishop&apos;s Stortford Rugby Football Club was founded in 1921, with its earliest matches played
                at Dunmow Road. In 1928, the Club moved to its current home at Silver Leys, where generations of
                players have since worn the blue and white with pride.
            </>
        ),
        title: "A proud beginning",
        year: "1921–1928",
    },
    {
        categories: ["Facilities"],
        description: (
            <>
                The Clubhouse was re-opened in 1985 with a celebratory match between the First XV and an
                International Select XV. While the score has faded into legend, tales of individual triumphs over
                international stars remain part of Club folklore.
            </>
        ),
        title: "A clubhouse reborn",
        year: "1985",
    },
    {
        categories: ["Men's rugby"],
        description: (
            <>
                With the introduction of League Rugby in 1987, the Club quickly found its footing, earning
                promotion to London Two North in the very first season. A long period of consistency followed, with the
                team regularly finishing in the top half of the table. After 15 years of near misses, promotion to
                London One (Level 5) was finally secured in 2003.
            </>
        ),
        title: "League rugby and a steady rise",
        year: "1987–2003",
    },
    {
        categories: ["Club honours", "Men's rugby"],
        description: (
            <>
                The Blues, the Club&apos;s Second XV, lifted the Hertfordshire County Cup in 2008 and again in
                2013,  finishing runners-up in 2014. The competition has been restricted to Level 6 and below since
                2012–13.
            </>
        ),
        title: "The Blues lift the county cup",
        year: "2008, 2013 & 2014",
    },
    {
        categories: ["Men's rugby"],
        description: (
            <>
                In 2012, the league was renamed National 3 London & South East. The change seemed to suit
                us—by 2013, after a decade of steady progress, we were crowned champions. The title was clinched in
                front of a crowd of 1,500 at Silver Leys on a sunny April afternoon, defeating Old Elthamians RFC in a
                match to remember.
            </>
        ),
        title: "Champions again",
        year: "2012–2013",
    },
    {
        categories: ["Men's rugby"],
        description: (
            <>
                Our first season at Level 4 brought early challenges, but the team rallied. Post-Christmas,
                we became one of the league&apos;s form sides, finishing an incredible third overall after a final-day
                victory over league winners Hartpury College RFC.
            </>
        ),
        title: "A new era: National 2 South",
        year: "2013–2014",
    },
    {
        categories: ["Youth rugby"],
        description: (
            <>
                Our Colts (U18s), playing mostly on Sundays, are regular winners of the Hertfordshire County
                Colts Cup and Sevens Cup. They also compete nationally, having won the National Colts Competition in
                2012–13.
            </>
        ),
        title: "National success for the Colts",
        year: "2012–2013",
    },
    {
        categories: ["Club honours", "Men's rugby"],
        description: (
            <>
                Stortford won National League 2 South after beating Exmouth 60–7 away from home on 22 April.
                A week later, 1,664 spectators attended the final home league match against Barnes, setting a club
                attendance record.
            </>
        ),
        title: "Promotion to National League 1",
        year: "2017",
    },
    {
        categories: ["Club heritage"],
        description: (
            <>
                Bishop&apos;s Stortford RFC reached its centenary, celebrating 100 years of rugby, community, and
                shared memories since the Club&apos;s foundation in 1921.
            </>
        ),
        title: "One hundred years of rugby",
        year: "2021",
    },
    {
        categories: ["Women's rugby"],
        description: (
            <>
                The women's section witnessed remarkable expansion. Following their triumphant promotion in
                the 2024–2025 season, the ambition turned towards further consolidation and growth. By the close of the
                2025–2026 campaign, efforts were well underway to establish a regularly fielded Second XV, marking
                another significant milestone in the section&apos;s development.
            </>
        ),
        title: "Women and girls continue to grow",
        year: "2024–2026",
    },
    {
        categories: ["Youth rugby", "Minis rugby"],
        description: (
            <>
                Our Mini and Youth Sections are thriving, with around 600 children learning and enjoying rugby
                at Stortford. This success is thanks to the dedication of parent-coaches and the Club&apos;s commitment
                to training and development.
            </>
        ),
        title: "Mini and youth rugby",
        year: "Today",
    },
    {
        categories: ["Men's rugby"],
        description: (
            <>
                The Blues compete in the Zoo Shield Division 2 North and represent the Club in the
                Hertfordshire County Cup. Our Thirds and Fourths play in the Herts Middlesex Merit Tables, while the
                Fifths are currently on a temporary break due to player shortages. Across all teams, we maintain a
                strong tradition of competitive yet social rugby every Saturday.
            </>
        ),
        title: "Rugby beyond the First XV",
        year: "Today",
    },
];

/**
 * This is the history page.
 * @returns The history page.
 */
export default function History(): ReactNode {
    const allCategories = [...new Set(events.map((event) => event.categories).flat())].sort();
    const [categories, setCategories] = useState<string[]>([]);

    const updateCategories = useCallback((category: string) => {
        setCategories((prev) => (prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category]));
    }, []);

    return (
        <>
            <Stack spacing={2}>
                <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="overline">
                    Our heritage
                </Typography>

                <Typography
                    component="h1"
                    sx={{ fontSize: { md: "3.75rem", xs: "2.5rem" }, fontWeight: 800 }}
                    variant="h2"
                >
                    A century of rugby
                </Typography>

                <Typography sx={{ fontWeight: 400, lineHeight: 1.7, maxWidth: 680, opacity: 0.9 }} variant="h6">
                    From our beginnings in 1921 to the generations of players, volunteers, and supporters who
                    make Silver Leys home. Discover the milestones that have shaped Bishop&apos;s Stortford RFC.
                </Typography>
            </Stack>

            <CategoryFilter
                categories={allCategories}
                onToggle={updateCategories}
                selectedCategories={categories}
            />
            <Timeline categories={categories} events={events} />

            <Box sx={{ borderColor: "divider", borderTop: 1, mt: 7, pt: 4 }}>
                <Stack spacing={2}>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }} variant="body1">
                        As England and British Lions legend Ben Clarke, one of our proudest alumni, once said:
                    </Typography>

                    <Typography
                        component="blockquote"
                        sx={{
                            borderColor: "primary.main",
                            borderLeft: 4,
                            fontSize: { md: "1.25rem", xs: "1.1rem" },
                            fontStyle: "italic",
                            fontWeight: 600,
                            m: 0,
                            pl: 3,
                            py: 1,
                        }}
                    >
                        “We have games at all levels for any age, size, ability and — join us now, be part
                        of the Club and prove it!”
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }} variant="body2">
                        Our history is still being written. Every match, every volunteer, and every generation of
                        players adds to the story of Bishop&apos;s Stortford RFC.
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}
