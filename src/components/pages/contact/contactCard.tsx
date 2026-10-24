"use client";

import { Avatar, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import type { Person } from "app/(pages)/contact/page";
import type { ReactNode } from "react";

/**
 * Contact card for displaying contact information.
 * @param props - The props object containing the person whose contact information is to be displayed.
 * @param props.person - The person whose contact information is to be displayed.
 * @returns The contact card section.
 */
export function ContactCard({ person }: { readonly person: Person; }): ReactNode {
    return (
        <Card sx={{ height: "100%" }}>
            <CardContent sx={{ color: "text.primary", textAlign: "center" }}>
                <CardMedia sx={{ mb: 2 }}>
                    <Avatar
                        alt={person.name}
                        src={person.avatar}
                        sx={{ aspectRatio: "1 / 1", height: "auto", m: "auto", width: "50%" }}
                    >
                        <Typography sx={{ fontSize: "3rem", fontWeight: "500" }}>
                            {person.name.split(" ").map((n) => n[0]).join("")}
                        </Typography>
                    </Avatar>
                </CardMedia>
                <Typography variant="h2">{person.name}</Typography>
                <Typography variant="subtitle1">{person.roles.join(", ")}</Typography>
                {person.email !== undefined && (
                    <Typography>
                        <Link href={`mailto:${person.email}`}>{person.email}</Link>
                    </Typography>
                )}
                {person.phone !== undefined && (
                    <Typography>
                        <Link href={`tel:${person.phone}`}>{person.phone}</Link>
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}
