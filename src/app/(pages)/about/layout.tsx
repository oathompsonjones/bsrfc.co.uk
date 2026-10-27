import type { Metadata } from "next";
import { getPageTitle } from "utils";

export { PageLayout as default } from "components/pageLayout";

export const metadata: Metadata = {
    description:
        "Learn about Bishop’s Stortford RFC, our club community, and the people who make rugby happen at Silver Leys.",
    title: getPageTitle("About the Club"),
};
