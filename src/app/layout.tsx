import "styles/global.css";
import "styles/layout.css";
import "styles/background.css";
import type { Metadata, Viewport } from "next";
import { Footer } from "components/footer";
import { Header } from "components/header/header";
import { Inter } from "next/font/google";
import { Providers } from "contexts/providers";
import type { ReactNode } from "react";

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

// https://realfavicongenerator.net (remove the mask icon and msapplication stuff)
export const metadata: Metadata = {
    description: "A mockup redesign for bsrfc.co.uk.",
    icons: {
        apple: "/logo.png",
        icon: [],
        shortcut: "/logo.png",
    },
    keywords: [],
    title: "BSRFC",
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
            <body className={inter.className}>
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
