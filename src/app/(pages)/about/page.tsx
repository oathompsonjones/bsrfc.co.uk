"use client";

import { Hero } from "components/hero";
import type { ReactNode } from "react";
import Section from "components/pages/about/section";
import huddle from "assets/images/1st-xv-huddle.jpg";
import kitShowcase from "assets/images/kit-showcase.jpg";
import leeds from "assets/images/1st-xv-leeds.jpg";
import rams from "assets/images/1st-xv-rams.jpg";

/**
 * Introduces the club and its community.
 * @returns The club introduction page.
 */
export default function About(): ReactNode {
    return (
        <>
            <Hero
                image={{
                    alt: "Bishop's Stortford RFC players together in a huddle",
                    image: huddle,
                }}
                intro={
                    "A community rugby club built by players, families, volunteers, and supporters. " +
                    "We bring people together through competitive rugby, shared effort, and a welcoming club life."
                }
                overline="Bishop's Stortford Rugby Football Club"
                title="A club built by its people"
            />

            <Section
                image={rams}
                imageAlt="Bishop's Stortford players competing in a match"
                linkHref="/teams"
                linkText="Explore our teams"
                text={
                    "Our aim is to make rugby something the whole community can enjoy—as a player, a family member, " +
                    "a volunteer, or a supporter. There are many ways to find a place at BSRFC, on the pitch " +
                    "and around it."
                }
                title="Rugby for everyone"
            />
            <Section
                image={kitShowcase}
                imageAlt="Bishop's Stortford RFC club kit"
                imageFirst={false}
                light
                linkHref="/history"
                linkText="Discover our history"
                text={
                    "We value the challenge of competing and the friendships built around the game. " +
                    "Coaches, volunteers, " +
                    "players, families, and supporters all help make the club what it is, week after week."
                }
                title="Competitive, social, and shared"
            />
            <Section
                image={leeds}
                imageAlt="Bishop's Stortford RFC players during a rugby match"
                linkHref="/safeguarding"
                linkText="Player welfare"
                text={
                    "Player welfare is central to how we deliver rugby. We work to provide a safe, enjoyable " +
                    "environment, " +
                    "with appropriate training, equipment, first aid, and support for physical and mental wellbeing."
                }
                title="A safe and supportive game"
            />

        </>
    );
}
