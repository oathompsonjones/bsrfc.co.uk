import type { Metadata } from "next";
import { getPageTitle } from "utils";

export { PageLayout as default } from "components/pageLayout";

export const metadata: Metadata = {
    description: "Find contact details for Bishop’s Stortford RFC’s committee, team contacts, and club officials.",
    title: getPageTitle("Contact"),
};
