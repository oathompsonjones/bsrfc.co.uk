import type { Metadata } from "next";
import { getPageTitle } from "utils";

export { PageLayout as default } from "components/pageLayout";

export const metadata: Metadata = {
    description: "Explore the history of Bishop’s Stortford RFC, founded in 1921 and based at Silver Leys since 1928.",
    title: getPageTitle("History"),
};
