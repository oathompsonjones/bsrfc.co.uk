import { Button, Divider, Stack, Typography } from "@mui/material";
import { Hero } from "components/hero";
import type { ReactNode } from "react";
import welcome from "assets/images/welcome.jpg";

/**
 * This is the find us page.
 * @returns The find us page.
 */
export default function FindUs(): ReactNode {
    return (
        <>
            <Hero
                image={{
                    alt: "Welcome sign at Bishop's Stortford RFC",
                    image: welcome,
                }}
                intro="Find the location and contact details for Bishop's Stortford RFC."
                overline="The home of BSRFC"
                title="Find Us"
            />
            <iframe
                allowFullScreen
                height="auto"
                referrerPolicy="strict-origin-when-cross-origin"
                src={
                    "https://www.google.com/maps/embed/v1/place" +
                    `?key=${process.env.GOOGLE_MAPS_API_KEY}` +
                    "&q=Bishop's+Stortford+Rugby+Club,+Silver+Leys,+Hadham+Rd,+Bishop's+Stortford+CM23+2QE"
                }
                style={{ aspectRatio: "16/9", border: 0 }}
                width="100%"
            />
            <Typography sx={{ ml: "auto" }}>
                Silver&nbsp;Leys, Hadham&nbsp;Road, Bishop's&nbsp;Stortford, Hertfordshire, CM23&nbsp;2QE
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Stack direction={{ md: "row", xs: "column" }} spacing={2} sx={{ justifyContent: "space-evenly" }}>
                <Button color="secondary" href="/location">
                    View on Google Maps
                </Button>
                <Button color="secondary" href="/contact">
                    Contact Us
                </Button>
            </Stack>
        </>
    );
}
