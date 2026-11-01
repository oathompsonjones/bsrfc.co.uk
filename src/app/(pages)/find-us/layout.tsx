import type { Metadata } from "next";
import { getPageTitle } from "utils";

export { PageLayout as default } from "components/pageLayout";

export const metadata: Metadata = {
    description: "Find the location and contact details for Bishop’s Stortford RFC.",
    title: getPageTitle("Find Us"),
};
