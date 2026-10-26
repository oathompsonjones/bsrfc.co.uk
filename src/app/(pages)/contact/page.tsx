import { Divider, Grid, Typography } from "@mui/material";
import { Fragment, type ReactNode } from "react";
import { ContactCard } from "components/pages/contact/contactCard";
import { Hero } from "components/hero";
import Link from "next/link";
import firstXv from "assets/images/1st-xv-26-27.jpg";

export type Person = {
    name: string;
    roles: string[];
    email?: string;
    phone?: string;
    avatar?: string;
};

type ContactGroup = {
    category: string;
    people: Person[];
};

const contacts: ContactGroup[] = [
    {
        category: "Executive Committee",
        people: [
            {
                email: "chair@bsrfc.co.uk",
                name: "Gareth Tracey",
                phone: "07880 928644",
                roles: ["Chairman"],
            },
            {
                email: "vice-chair@bsrfc.co.uk",
                name: "Graham Willson",
                phone: "07876 307815",
                roles: ["Vice Chairman"],
            },
            {
                email: "secretary@bsrfc.co.uk",
                name: "Dee Compton",
                phone: "01279 652092",
                roles: ["Honorary Secretary"],
            },
            {
                email: "membership@bsrfc.co.uk",
                name: "Geoff Pedersen",
                roles: ["Membership Secretary"],
            },
            {
                email: "seniormenschair@bsrfc.co.uk",
                name: "Chetan Sharma",
                phone: "07341 344337",
                roles: ["Senior Men's Chair"],
            },
            {
                email: "womensmanager@bsrfc.co.uk",
                name: "Donna McDonald",
                phone: "07854 220433",
                roles: ["Women and Girls Chair"],
            },
            {
                name: "Jim Tanfield",
                phone: "07795 417258",
                roles: ["Youth Rugby Chair"],
            },
            {
                name: "Nikky Wilkins",
                phone: "07716 705603",
                roles: ["Mini Rugby Chair", "Girls Contact (Under 18s)"],
            },
            {
                name: "Jake Tiley",
                roles: ["Non-Contact Rugby"],
            },
        ],
    },
    {
        category: "Club Leadership",
        people: [
            {
                email: "president@bsrfc.co.uk",
                name: "Dave Walker",
                phone: "07970 551378",
                roles: ["President", "Disciplinary Officer"],
            },
            {
                email: "tradingfinance@bsrfc.co.uk",
                name: "James Andrews",
                roles: ["Honorary Treasurer"],
            },
        ],
    },
    {
        category: "Colts",
        people: [
            {
                name: "Matt Woodford",
                phone: "07850 596677",
                roles: ["Colts Lead Coach"],
            },
            {
                name: "Roland Bruand",
                phone: "07779 808419",
                roles: ["Colts Manager"],
            },
        ],
    },
    {
        category: "Club Operations",
        people: [
            {
                name: "Mike Hamer",
                phone: "07905 501017",
                roles: ["Volunteer Co-ordinator"],
            },
            {
                name: "Mehmet Mehmet",
                roles: ["RugbySafe Lead", "Fixture Secretary"],
            },
            {
                email: "safeguarding@bsrfc.co.uk",
                name: "Claire Sanday",
                roles: ["Safeguarding"],
            },
            {
                email: "keith.edgeworth@hotmail.com",
                name: "Keith Edgeworth",
                phone: "07905 153141",
                roles: ["Referee Co-ordinator"],
            },
            {
                name: "Benjamin Furrer",
                phone: "07836 545858",
                roles: ["Coaching Co-ordinator"],
            },
            {
                name: "Ros Lennon",
                roles: ["International Ticket Contact"],
            },
        ],
    },
    {
        category: "Commercial and Facilities",
        people: [
            {
                email: "trading-chair@bsrfc.co.uk",
                name: "Jamie Baker",
                roles: ["Trading Subsidiary Chairman"],
            },
            {
                email: "trading2@bsrfc.co.uk",
                name: "Karl Winter",
                roles: ["Trading Subsidiary Secretary"],
            },
            {
                email: "sponsorship@bsrfc.co.uk",
                name: "Julie North",
                roles: ["Sponsorship and Advertising"],
            },
            {
                email: "1stxvlunches@bsrfc.co.uk",
                name: "Gemma Menzies",
                roles: ["1st XV Match Lunches"],
            },
            {
                email: "clubshop@bsrfc.co.uk",
                name: "Club Shop",
                roles: ["Club Shop Enquiries"],
            },
        ],
    },
];

/**
 * This is the contact page.
 * @returns The contact page.
 */
export default function Contact(): ReactNode {
    return (
        <>
            <Hero
                image={{ alt: "Bishop's Stortford RFC first XV, 2026–27 season", image: firstXv }}
                overline="Get in touch"
                title="Contact Us"
            />
            <Typography sx={{ mb: 2 }}>
                For general enquiries, please contact us at{" "}
                <Link href="mailto:secretary@bsrfc.co.uk">secretary@bsrfc.co.uk</Link>.
            </Typography>
            <Divider />
            <Grid container spacing={2}>
                {contacts.map((category) => (
                    <Fragment key={category.category}>
                        <Grid size={12}>
                            <Typography variant="h2">{category.category}</Typography>
                        </Grid>
                        <Grid container size={12} spacing={2} sx={{ justifyContent: "center" }}>
                            {category.people.map((person) => (
                                <Grid key={person.name} size={{ md: 4, sm: 6, xs: 12 }}>
                                    <ContactCard person={person} />
                                </Grid>
                            ))}
                        </Grid>
                    </Fragment>
                ))}
            </Grid>
        </>
    );
}
