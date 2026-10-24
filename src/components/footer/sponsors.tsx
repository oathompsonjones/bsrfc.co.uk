"use client";

import { Box, Divider, Stack } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

import aceOfLanes from "assets/images/sponsors/Ace of Lanes.png";
import andrewBanks from "assets/images/sponsors/Andrew Banks.png";
import baileyHills from "assets/images/sponsors/Bailey Hills.png";
import belcom from "assets/images/sponsors/Belcom.png";
import bishopsStortfordCollege from "assets/images/sponsors/Bishop's Stortford College.png";
import bitSolutions from "assets/images/sponsors/Bit Solutions.png";
import cammasHall from "assets/images/sponsors/Cammas Hall.png";
import charterhouse from "assets/images/sponsors/Charterhouse.png";
import circadian from "assets/images/sponsors/Circadian.png";
import cleanerGroup from "assets/images/sponsors/Cleaner Group.png";
import connect from "assets/images/sponsors/Connect.png";
import cousinsChauffeurs from "assets/images/sponsors/Cousins Chauffeurs.png";
import forefront from "assets/images/sponsors/Forefront.png";
import forward from "assets/images/sponsors/Forward.png";
import fosterColdstores from "assets/images/sponsors/Foster Coldstores.png";
import garsons from "assets/images/sponsors/Garsons.png";
import group1 from "assets/images/sponsors/Group 1.png";
import groveCottage from "assets/images/sponsors/Grove Cottage.png";
import grs from "assets/images/sponsors/GRS.png";
import gtm from "assets/images/sponsors/GTM.png";
import ham from "assets/images/sponsors/HAM.png";
import hammondDevelopments from "assets/images/sponsors/Hammond Developments.png";
import hanburyWealth from "assets/images/sponsors/Hanbury Wealth.png";
import hdprint from "assets/images/sponsors/hdprint.png";
import hiltonCoachworks from "assets/images/sponsors/Hilton Coachworks.png";
import jems from "assets/images/sponsors/Jems.png";
import jgl from "assets/images/sponsors/JGL.png";
import koru from "assets/images/sponsors/koru.png";
import latchmore from "assets/images/sponsors/Latchmore.png";
import mackness from "assets/images/sponsors/Mackness.png";
import mantleSpace from "assets/images/sponsors/Mantle Space.png";
import marshallFire from "assets/images/sponsors/Marshall Fire.png";
import menor from "assets/images/sponsors/Menor.png";
import mivida from "assets/images/sponsors/Mivida.png";
import mjWarner from "assets/images/sponsors/MJ Warner.png";
import mortgageAndMoneyManagement from "assets/images/sponsors/Mortgage and Money Management.png";
import mrBarbers from "assets/images/sponsors/Mr Barbers.png";
import mullucks from "assets/images/sponsors/Mullucks.png";
import nfuMutual from "assets/images/sponsors/NFU Mutual.png";
import nockolds from "assets/images/sponsors/Nockolds.png";
import palmerAndMartin from "assets/images/sponsors/Palmer and Martin.png";
import ponds from "assets/images/sponsors/Ponds.png";
import priceBailey from "assets/images/sponsors/Price Bailey.png";
import recruitAbility from "assets/images/sponsors/Recruit Ability.png";
import russelProperty from "assets/images/sponsors/Russel Property.png";
import sbCivils from "assets/images/sponsors/SB Civils.png";
import spencerFellow from "assets/images/sponsors/Spencer Fellows.png";
import steelBuilders from "assets/images/sponsors/Steel Builders.png";
import stiga from "assets/images/sponsors/Stiga.png";
import stortBiltong from "assets/images/sponsors/Stort Biltong.png";
import stortBlinds from "assets/images/sponsors/Stort Blinds.png";
import taylors from "assets/images/sponsors/Taylors.png";
import tees from "assets/images/sponsors/Tees.png";
import theBreweryTap from "assets/images/sponsors/The Brewery Tap.png";
import theThreeWillows from "assets/images/sponsors/The Three Willows.png";
import westbury from "assets/images/sponsors/Westbury.png";

type Sponsor = {
    link: string;
    logo: StaticImageData;
    name: string;
};

const sponsors: Sponsor[] = [
    {
        link: "https://www.aceoflanes.co.uk",
        logo: aceOfLanes,
        name: "Ace of Lanes",
    },
    {
        link: "https://andrewbanks.co.uk",
        logo: andrewBanks,
        name: "Andrew Banks",
    },
    {
        link: "https://baileyhills.co.uk",
        logo: baileyHills,
        name: "Bailey Hills",
    },
    {
        link: "https://belcom.co.uk",
        logo: belcom,
        name: "Belcom",
    },
    {
        link: "https://www.bishopsstortfordcollege.org",
        logo: bishopsStortfordCollege,
        name: "Bishop's Stortford College",
    },
    {
        link: "https://bitsolutions.net",
        logo: bitSolutions,
        name: "Bit Solutions",
    },
    {
        link: "https://www.cammashall.co.uk",
        logo: cammasHall,
        name: "Cammas Hall",
    },
    {
        link: "https://cvdgroup.com",
        logo: charterhouse,
        name: "Charterhouse",
    },
    {
        link: "https://circadianfx.com",
        logo: circadian,
        name: "Circadian",
    },
    {
        link: "https://cleanergroup.co.uk",
        logo: cleanerGroup,
        name: "Cleaner Group",
    },
    {
        link: "https://connectscaffolding.co.uk",
        logo: connect,
        name: "Connect",
    },
    {
        link: "https://www.cousinschauffeurs.co.uk",
        logo: cousinsChauffeurs,
        name: "Cousins Chauffeurs",
    },
    {
        link: "https://www.forefrontsigns.co.uk",
        logo: forefront,
        name: "Forefront",
    },
    {
        link: "https://www.forwardcf.co.uk",
        logo: forward,
        name: "Forward",
    },
    {
        link: "https://www.fostercoldstores.com",
        logo: fosterColdstores,
        name: "Foster Coldstores",
    },
    {
        link: "https://garsonsgroup.co.uk",
        logo: garsons,
        name: "Garsons",
    },
    {
        link: "https://www.group1auto.co.uk/audi/",
        logo: group1,
        name: "Group 1",
    },
    {
        link: "https://mencapgrovecottage.org",
        logo: groveCottage,
        name: "Grove Cottage",
    },
    {
        link: "https://grs-group.com",
        logo: grs,
        name: "GRS",
    },
    {
        link: "https://gtmrural.com",
        logo: gtm,
        name: "GTM",
    },
    {
        link: "https://www.harlow-ag.co.uk",
        logo: ham,
        name: "HAM",
    },
    {
        link: "https://www.hammonddevelopments.com",
        logo: hammondDevelopments,
        name: "Hammond Developments",
    },
    {
        link: "https://hanburywealth.co.uk",
        logo: hanburyWealth,
        name: "Hanbury Wealth",
    },
    {
        link: "https://www.hdprint.co.uk",
        logo: hdprint,
        name: "HD Print",
    },
    {
        link: "https://www.hiltonaccidentrepair.co.uk",
        logo: hiltonCoachworks,
        name: "Hilton Coachworks",
    },
    {
        link: "https://www.jemsaccountancy.com",
        logo: jems,
        name: "Jems",
    },
    {
        link: "https://jgldevelopments.com",
        logo: jgl,
        name: "JGL",
    },
    {
        link: "https://www.korugym.com",
        logo: koru,
        name: "Koru",
    },
    {
        link: "https://basildondriveways.co.uk/driveways/little-hallingbury/latchmore-construction-ltd/",
        logo: latchmore,
        name: "Latchmore",
    },
    {
        link: "https://macknesscontracting.co.uk",
        logo: mackness,
        name: "Mackness",
    },
    {
        link: "https://mantlespace.co.uk",
        logo: mantleSpace,
        name: "Mantle",
    },
    {
        link: "https://www.marshallfire.co.uk",
        logo: marshallFire,
        name: "Marshall Fire",
    },
    {
        link: "https://www.menor.co.uk",
        logo: menor,
        name: "Menor",
    },
    {
        link: "https://mividawealth.co.uk",
        logo: mivida,
        name: "Mivida",
    },
    {
        link: "https://www.mjwarner.co.uk",
        logo: mjWarner,
        name: "M J Warner",
    },
    {
        link: "https://mortgageandmoneymanagement.co.uk",
        logo: mortgageAndMoneyManagement,
        name: "Mortgage and Money Management",
    },
    {
        link: "https://mrbarbers.co.uk",
        logo: mrBarbers,
        name: "Mr Barbers",
    },
    {
        link: "https://www.mullucks.co.uk",
        logo: mullucks,
        name: "Mullucks",
    },
    {
        link: "https://www.nfumutual.co.uk",
        logo: nfuMutual,
        name: "NFU Mutual",
    },
    {
        link: "https://www.nockolds.co.uk",
        logo: nockolds,
        name: "Nockolds",
    },
    {
        link: "https://palmerandmartin.co.uk",
        logo: palmerAndMartin,
        name: "Palmer & Martin",
    },
    {
        link: "https://www.pondandgardendesign.co.uk",
        logo: ponds,
        name: "Ponds",
    },
    {
        link: "https://www.pricebailey.co.uk",
        logo: priceBailey,
        name: "Price Bailey",
    },
    {
        link: "https://www.recruitability.co.uk",
        logo: recruitAbility,
        name: "Recruit Ability",
    },
    {
        link: "https://russellpp.co.uk",
        logo: russelProperty,
        name: "Russel Property",
    },
    {
        link: "https://sbcivils.co.uk",
        logo: sbCivils,
        name: "SB Civils",
    },
    {
        link: "https://spencerfellows.co.uk",
        logo: spencerFellow,
        name: "Spencer Fellows",
    },
    {
        link: "https://steelbuildmasters.co.uk",
        logo: steelBuilders,
        name: "Steel Builders",
    },
    {
        link: "https://www.stiga.com/",
        logo: stiga,
        name: "Stiga",
    },
    {
        link: "https://stortbiltong.com",
        logo: stortBiltong,
        name: "Stort Biltong",
    },
    {
        link: "https://stortblinds.co.uk",
        logo: stortBlinds,
        name: "Stort Blinds",
    },
    {
        link: "https://www.taylorscentres.co.uk",
        logo: taylors,
        name: "Taylors",
    },
    {
        link: "https://teeslaw.com",
        logo: tees,
        name: "Tees",
    },
    {
        link: "https://thebrewerytap.co.uk",
        logo: theBreweryTap,
        name: "The Brewery Tap",
    },
    {
        link: "https://thethreewillows.com",
        logo: theThreeWillows,
        name: "The Three Willows",
    },
    {
        link: "https://www.westburygr.com",
        logo: westbury,
        name: "Westbury",
    },
];

/**
 * Displays the logos of various sponsors.
 * @returns The sponsor logos section.
 */
export function Sponsors(): ReactNode {
    const containerRef = useRef<HTMLDivElement>(null);
    const sequenceRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<Animation | null>(null);
    const [copies, setCopies] = useState(2);
    const [sequenceWidth, setSequenceWidth] = useState(0);
    const animationDuration = 180_000;

    const pause = useCallback((): void => animationRef.current?.pause(), [animationRef]);
    const play = useCallback((): void => animationRef.current?.play(), [animationRef]);

    useEffect(() => {
        const container = containerRef.current;
        const sequence = sequenceRef.current;

        if (!container || !sequence)
            return (): void => undefined;

        const updateDimensions = (): void => {
            const { width } = sequence.getBoundingClientRect();

            if (width <= 0)
                return;

            const requiredCopies = Math.max(2, Math.ceil(container.clientWidth / width) + 1);

            setSequenceWidth((current) => (current === width ? current : width));
            setCopies((current) => (current === requiredCopies ? current : requiredCopies));
        };

        const observer = new ResizeObserver(updateDimensions);

        observer.observe(container);
        observer.observe(sequence);
        updateDimensions();

        return (): void => observer.disconnect();
    }, []);

    useEffect(() => {
        const track = trackRef.current;

        if (!track || sequenceWidth <= 0) {
            animationRef.current?.cancel();
            animationRef.current = null;

            return (): void => undefined;
        }

        animationRef.current?.cancel();

        const animation = track.animate(
            [{ transform: "translateX(0)" }, { transform: `translateX(-${sequenceWidth}px)` }],
            { duration: animationDuration, easing: "linear", iterations: Infinity },
        );

        animationRef.current = animation;

        return (): void => {
            animation.cancel();

            if (animationRef.current === animation)
                animationRef.current = null;
        };
    }, [sequenceWidth]);

    useEffect(() => {
        const container = containerRef.current;

        if (!container)
            return (): void => undefined;

        const handleWheel = (event: WheelEvent): void => {
            const animation = animationRef.current;

            // Only handle horizontal trackpad gestures.
            if (!animation || sequenceWidth <= 0 || event.deltaX === 0)
                return;

            event.preventDefault();

            const currentTime = Number(animation.currentTime ?? 0);
            const timeDelta = event.deltaX / sequenceWidth * animationDuration;

            // Keep the animation time within one complete cycle, including when scrolling backwards.
            animation.currentTime = (
                (currentTime + timeDelta) % animationDuration + animationDuration
            ) % animationDuration;
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return (): void => container.removeEventListener("wheel", handleWheel);
    }, [sequenceWidth]);

    return (
        <Box
            ref={containerRef}
            sx={{ height: "75px", overflow: "hidden", overscrollBehaviorX: "contain", width: "100%" }}
        >
            <Stack
                direction="row"
                onPointerEnter={pause}
                onPointerLeave={play}
                ref={trackRef}
                sx={{ height: "100%", width: "max-content", willChange: "transform" }}
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
                                <Link
                                    href={sponsor.link}
                                    rel="noopener noreferrer"
                                    style={{ height: "100%" }}
                                    target="_blank"
                                >
                                    <Image
                                        alt={sponsor.name}
                                        src={sponsor.logo}
                                        style={{
                                            height: "100%",
                                            maxWidth: "300px",
                                            objectFit: "contain",
                                            width: "auto",
                                        }}
                                    />
                                </Link>
                                <Divider orientation="vertical" sx={{ height: "50%", opacity: 0.5, px: 1 }} />
                            </Box>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
}
