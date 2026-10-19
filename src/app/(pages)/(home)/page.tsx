import { ClubIntroduction } from "components/pages/home/clubIntroduction";
import { HomeHero } from "components/pages/home/homeHero";
import type { ReactNode } from "react";

/**
 * This is the home page.
 * @returns The home page.
 */
export default function Home(): ReactNode {
    return (
        <>
            <HomeHero />
            <ClubIntroduction />
        </>
    );
}
