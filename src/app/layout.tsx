import "styles/global.css";
import "styles/layout.css";
import "styles/background.css";
import type { Metadata, Viewport } from "next";
import { Footer } from "components/footer/footer";
import { Header } from "components/header/header";
import { Providers } from "contexts/providers";
import type { ReactNode } from "react";
import { SITE_TITLE } from "utils";
import localFont from "next/font/local";

const inter = localFont({
    src: [
        { path: "../assets/fonts/InterVariable.woff2", style: "normal", weight: "100 900" },
        { path: "../assets/fonts/InterVariable-Italic.woff2", style: "italic", weight: "100 900" },
    ],
    variable: "--font-inter",
});

const organizationStructuredData = JSON.stringify(JSON.parse(String.raw`
{
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressLocality": "Bishop's Stortford",
    "addressRegion": "Hertfordshire",
    "postalCode": "CM23 2QE",
    "streetAddress": "Silver Leys, Hadham Road"
  },
  "alternateName": "BSRFC",
  "email": "secretary@bsrfc.co.uk",
  "foundingDate": "1921",
  "logo": "https://bsrfc.co.uk/logo.png",
  "name": "Bishop's Stortford Rugby Football Club",
  "sameAs": [
    "https://www.facebook.com/BishopsStortfordRugbyClub",
    "https://www.instagram.com/bsrfc",
    "https://x.com/BSRUGBY"
  ],
  "sport": "Rugby union",
  "telephone": "+44-1279-652092",
  "url": "https://bsrfc.co.uk"
}
`) as Record<string, unknown>).replace(/</gu, "\\u003c");

// https://realfavicongenerator.net (remove the mask icon and msapplication stuff)
export const metadata: Metadata = {
    appleWebApp: { title: SITE_TITLE },
    description: [
        "Bishop’s Stortford Rugby Football Club is a community rugby club in Hertfordshire,",
        "with senior, women’s, youth, minis and touch rugby.",
    ].join(" "),
    keywords: [
        "Bishop's Stortford Rugby Club",
        "Bishop's Stortford RFC",
        "BSRFC",
        "rugby",
        "community rugby",
        "Hertfordshire rugby",
    ],
    metadataBase: new URL("https://bsrfc.co.uk"),
    openGraph: {
        description: [
            "Bishop’s Stortford Rugby Football Club is a community rugby club in Hertfordshire,",
            "with teams for all ages and abilities.",
        ].join(" "),
        locale: "en_GB",
        siteName: SITE_TITLE,
        title: SITE_TITLE,
        type: "website",
        url: "/",
    },
    title: SITE_TITLE,
};

export const viewport: Viewport = {
    initialScale: 1,
    themeColor: "#003ca5",
    width: "device-width",
};

/**
 * A wrapper to build every page.
 * @param props - The props to pass to the layout.
 * @param props.children - The children to render.
 * @returns A page wrapper.
 */
export default function Layout({ children }: { readonly children: ReactNode; }): ReactNode {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        __html: organizationStructuredData,
                    }}
                    type="application/ld+json"
                />
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <Providers>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
