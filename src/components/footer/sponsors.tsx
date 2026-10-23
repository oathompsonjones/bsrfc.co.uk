"use client";

import { Box, Divider, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import aceOfLanes from "assets/images/sponsors/Ace of Lanes.png";
import andrewBanks from "assets/images/sponsors/Andrew Banks.png";
import baileyHills from "assets/images/sponsors/Bailey Hills.png";
import bitSolutions from "assets/images/sponsors/Bit Solutions.png";
import cammasHall from "assets/images/sponsors/Cammas Hall.jpg";
import charterhouse from "assets/images/sponsors/Charterhouse.png";
import circadian from "assets/images/sponsors/Circadian.jpg";
import cleanerGroup from "assets/images/sponsors/Cleaner Group.jpg";
import connect from "assets/images/sponsors/Connect.png";
import cousinsChauffeurs from "assets/images/sponsors/Cousins Chauffeurs.jpg";
import forward from "assets/images/sponsors/Forward.png";
import fosterColdstores from "assets/images/sponsors/Foster Coldstores.png";
import garsons from "assets/images/sponsors/Garsons.png";
import group1 from "assets/images/sponsors/Group 1.png.webp";
import groveCottage from "assets/images/sponsors/Grove Cottage.png";
import grs from "assets/images/sponsors/GRS.jpg";
import gtm from "assets/images/sponsors/GTM.png";
import ham from "assets/images/sponsors/HAM.png.webp";
import hammondDevelopments from "assets/images/sponsors/Hammond Developments.jpg";
import hanburyWealth from "assets/images/sponsors/Hanbury Wealth.jpg";
import hdprint from "assets/images/sponsors/hdprint.png";
import hiltonCoachworks from "assets/images/sponsors/Hilton Coachworks.png";
import jems from "assets/images/sponsors/Jems.png";
import jgl from "assets/images/sponsors/JGL.jpg";
import latchmore from "assets/images/sponsors/Latchmore.png";
import mackness from "assets/images/sponsors/Mackness.png";
import mantle from "assets/images/sponsors/Mantle.png";
import marshallFire from "assets/images/sponsors/Marshall Fire.jpg";
import menor from "assets/images/sponsors/Menor.jpg";
import mortgageAndMoneyManagement from "assets/images/sponsors/Mortgage and Money Management.png";
import mrBarbers from "assets/images/sponsors/Mr Barbers.png";
import mullucks from "assets/images/sponsors/Mullucks.jpg";
import nfuMutual from "assets/images/sponsors/NFU Mutual.png";
import nockolds from "assets/images/sponsors/Nockolds.png";
import ponds from "assets/images/sponsors/Ponds.png";
import priceBailey from "assets/images/sponsors/Price Bailey.png";
import recruitAbility from "assets/images/sponsors/Recruit Ability.png";
import russelProperty from "assets/images/sponsors/Russel Property.png";
import sbCivils from "assets/images/sponsors/SB Civils.jpg";
import spencerFellow from "assets/images/sponsors/Spencer Fellows.png.webp";
import steelBuilders from "assets/images/sponsors/Steel Builders.jpg";
import stiga from "assets/images/sponsors/Stiga.png";
import stortBiltong from "assets/images/sponsors/Stort Biltong.png";
import tees from "assets/images/sponsors/Tees.png";
import theCollege from "assets/images/sponsors/The College.png";
import theThreeWillows from "assets/images/sponsors/The Three Willows.png";
import westbury from "assets/images/sponsors/Westbury.png";

type Sponsor = {
    name: string;
    logo: StaticImageData;
};

const sponsors: Sponsor[] = [
    { logo: aceOfLanes, name: "Ace of Lanes" },
    { logo: andrewBanks, name: "Andrew Banks" },
    { logo: baileyHills, name: "Bailey Hills" },
    { logo: bitSolutions, name: "Bit Solutions" },
    { logo: cammasHall, name: "Cammas Hall" },
    { logo: charterhouse, name: "Charterhouse" },
    { logo: circadian, name: "Circadian" },
    { logo: cleanerGroup, name: "Cleaner Group" },
    { logo: connect, name: "Connect" },
    { logo: cousinsChauffeurs, name: "Cousins Chauffeurs" },
    { logo: forward, name: "Forward" },
    { logo: fosterColdstores, name: "Foster Coldstores" },
    { logo: garsons, name: "Garsons" },
    { logo: group1, name: "Group 1" },
    { logo: groveCottage, name: "Grove Cottage" },
    { logo: grs, name: "GRS" },
    { logo: gtm, name: "GTM" },
    { logo: ham, name: "HAM" },
    { logo: hammondDevelopments, name: "Hammond Developments" },
    { logo: hanburyWealth, name: "Hanbury Wealth" },
    { logo: hdprint, name: "HD Print" },
    { logo: hiltonCoachworks, name: "Hilton Coachworks" },
    { logo: jems, name: "Jems" },
    { logo: jgl, name: "JGL" },
    { logo: latchmore, name: "Latchmore" },
    { logo: mackness, name: "Mackness" },
    { logo: mantle, name: "Mantle" },
    { logo: marshallFire, name: "Marshall Fire" },
    { logo: menor, name: "Menor" },
    { logo: mortgageAndMoneyManagement, name: "Mortgage and Money Management" },
    { logo: mrBarbers, name: "Mr Barbers" },
    { logo: mullucks, name: "Mullucks" },
    { logo: nfuMutual, name: "NFU Mutual" },
    { logo: nockolds, name: "Nockolds" },
    { logo: ponds, name: "Ponds" },
    { logo: priceBailey, name: "Price Bailey" },
    { logo: recruitAbility, name: "Recruit Ability" },
    { logo: russelProperty, name: "Russel Property" },
    { logo: sbCivils, name: "SB Civils" },
    { logo: spencerFellow, name: "Spencer Fellows" },
    { logo: steelBuilders, name: "Steel Builders" },
    { logo: stiga, name: "Stiga" },
    { logo: stortBiltong, name: "Stort Biltong" },
    { logo: tees, name: "Tees" },
    { logo: theCollege, name: "The College" },
    { logo: theThreeWillows, name: "The Three Willows" },
    { logo: westbury, name: "Westbury" },
];

/**
 * Displays the logos of various sponsors.
 * @returns The sponsor logos section.
 */
export function Sponsors(): ReactNode {
    const containerRef = useRef<HTMLDivElement>(null);
    const sequenceRef = useRef<HTMLDivElement>(null);
    const [copies, setCopies] = useState(2);
    const [sequenceWidth, setSequenceWidth] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const sequence = sequenceRef.current;

        if (!container || !sequence)
            return (): void => undefined;

        const updateDimensions = (): void => {
            const { width } = sequence.getBoundingClientRect();

            if (width <= 0)
                return;

            setSequenceWidth((current) => (current === width ? current : width));

            const requiredCopies = Math.max(
                2,
                Math.ceil(container.clientWidth / width) + 1,
            );

            setCopies((current) => (current === requiredCopies ? current : requiredCopies));
        };

        const observer = new ResizeObserver(updateDimensions);

        observer.observe(container);
        observer.observe(sequence);
        updateDimensions();

        return (): void => observer.disconnect();
    }, []);

    return (
        <Box ref={containerRef} sx={{ height: "75px", overflow: "hidden", width: "100%" }}>
            <Stack
                direction="row"
                sx={{
                    /* eslint-disable @typescript-eslint/naming-convention */
                    "&:hover": { animationPlayState: "paused" },
                    "--sponsor-distance": `${sequenceWidth}px`,
                    "@keyframes scrollSponsors": {
                        from: { transform: "translateX(0)" },
                        to: { transform: "translateX(calc(-1 * var(--sponsor-distance)))" },
                    },
                    "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                    /* eslint-enable @typescript-eslint/naming-convention */
                    animation: sequenceWidth > 0 ? "scrollSponsors 180s linear infinite" : "none",
                    height: "100%",
                    width: "max-content",
                }}
            >
                {Array.from({ length: copies }, (_, copy) => (
                    <Stack
                        direction="row"
                        key={copy}
                        ref={copy === 0 ? sequenceRef : undefined}
                        sx={{ flexShrink: 0, height: "100%", width: "max-content" }}
                    >
                        {sponsors.map((sponsor) => (
                            <Box
                                key={`${copy}-${sponsor.name}`}
                                sx={{ alignItems: "center", display: "flex", flexShrink: 0, height: "100%", px: 1 }}
                            >
                                <Image
                                    alt={sponsor.name}
                                    src={sponsor.logo}
                                    style={{ height: "100%", maxWidth: "200px", objectFit: "contain", width: "auto" }}
                                />
                                <Divider orientation="vertical" sx={{ height: "50%", opacity: 0.5, px: 1 }} />
                            </Box>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
}
