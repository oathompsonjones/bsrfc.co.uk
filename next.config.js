// @ts-check
import { next } from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        emotion: true,
        styledComponents: true,
    },
    reactStrictMode: true,
    // eslint-disable-next-line require-await
    async redirects() {
        return Object.entries({
            facebook: "https://www.facebook.com/BishopsStortfordRugbyClub",
            gms: "https://gms.rfu.com/gms/Account/Login?OnComplete=ClubsiteSignIn_www.bsrfc.co.uk&OrganisationId=1770",
            instagram: "https://www.instagram.com/bsrfc",
            location: "https://www.google.com/maps/search/?api=1&query=" +
            "Bishop's+Stortford+Rugby+Club,+Silver+Leys,+Hadham+Rd,+Bishop's+Stortford+CM23+2QE",
            mail: "mailto:secretary@bsrfc.co.uk",
            phone: "tel:+441279652092",
            shop: "https://bsrfcshop.co.uk",
            sponsors: "https://bsrfc.club",
            twitter: "https://x.com/BSRUGBY",
            x: "https://x.com/BSRUGBY",
        }).map(([source, destination]) => ({
            destination,
            permanent: true,
            source: `/${source}`,
        }));
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/u,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default next({ rsc: true })(nextConfig);
