import { Grid, Stack } from "@mui/material";
import Link from "next/link";
import type { ReactNode } from "react";

const links = [
    { href: "/find-us", label: "Location" },
    { href: "/gms", label: "GMS" },
    { href: "/shop", label: "Shop" },
    { href: "/privacy", label: "Privacy Policy" },
];

const columns: Array<typeof links> = [[], [], []];
const remainder = links.length % 3;
const regularCount = links.length - remainder;
const extras = links.slice(regularCount);

links.slice(0, regularCount).forEach((link, index) => {
    columns[index % 3]!.push(link);
});

if (remainder === 1) {
    columns[1]!.push(extras[0]!);
} else if (remainder === 2) {
    columns[0]!.push(extras[0]!);
    columns[2]!.push(extras[1]!);
}

/**
 * Displays the additional site links.
 * @returns The additional links.
 */
export function ExtraLinks(): ReactNode {
    return (
        <Grid
            columns={{ sm: 3, xs: 1 }}
            container
            // eslint-disable-next-line @typescript-eslint/naming-convention
            sx={{ "& a": { whiteSpace: "nowrap" } }}
        >
            {columns.map((column, index) => (
                <Grid
                    key={index}
                    size={1}
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: {
                            sm: ["flex-end", "center", "flex-start"][index],
                            xs: "center",
                        },
                        ...index === 0 && { pr: { sm: 10 } },
                        ...index === 2 && { pl: { sm: 10 } },
                    }}
                >
                    <Stack>
                        {column.map(({ href, label }) => (<Link href={href} key={href}>{label}</Link>))}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}
