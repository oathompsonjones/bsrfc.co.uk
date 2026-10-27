import type { Metadata } from "next";
import { getPageTitle } from "utils";

export { PageLayout as default } from "components/pageLayout";

export const metadata: Metadata = {
    description: "Read news, match reports, and club updates from Bishop’s Stortford Rugby Football Club.",
    title: getPageTitle("News & Media"),
};
