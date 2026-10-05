/** @type {import('next').NextConfig} */
export default {
    compiler: {
        emotion: true,
        styledComponents: true,
    },
    // eslint-disable-next-line require-await
    async redirects() {
        return Object.entries({
            "business-directory": "https://bsrfc.club",
            shop: "https://bsrfcshop.co.uk",
        }).map(([source, destination]) => ({
            destination,
            permanent: true,
            source: `/${source}`,
        }));
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/u,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
