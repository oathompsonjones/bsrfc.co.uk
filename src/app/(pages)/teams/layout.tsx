import type { Metadata } from "next";
import { getPageTitle } from "utils";

export { PageLayout as default } from "components/pageLayout";

export const metadata: Metadata = {
    description:
        "Discover men’s, women’s, colts, youth, girls’, minis, and touch rugby teams at Bishop’s Stortford RFC.",
    title: getPageTitle("Teams"),
};
