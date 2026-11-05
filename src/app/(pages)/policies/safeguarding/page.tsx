import { Disclaimer } from "components/pages/policies/disclaimer";
import { Heading } from "components/pages/policies/heading";
import type { ReactNode } from "react";
import { Section } from "components/pages/policies/section";
import { Typography } from "@mui/material";

/**
 * BSRFC Safeguarding Policy page component.
 * @returns The safeguarding policy content.
 */
// eslint-disable-next-line max-lines-per-function
export default function SafeguardingPolicy(): ReactNode {
    return (
        <>
            <Disclaimer />

            <Heading title="Safeguarding Policy" updated="Not yet approved" />

            <Typography>
                Bishop&apos;s Stortford Rugby Football Club (“BSRFC”, “the Club”) is committed to safeguarding and
                promoting the welfare of children and adults involved in rugby.
            </Typography>
            <Typography>
                We believe that everyone should be able to participate in rugby in a safe, positive, inclusive, and
                enjoyable environment.
            </Typography>
            <Typography>
                This draft sets out the Club&apos;s safeguarding principles and expectations. It must be read alongside
                the current Rugby Football Union (RFU) safeguarding policies, regulations, and guidance.
            </Typography>

            <Section title="1. Our commitment">
                <Typography>BSRFC recognises that safeguarding is everyone&apos;s responsibility.</Typography>
                <Typography>
                    The welfare of children and adults at risk is central to our activities and decision-making.
                </Typography>
                <Typography>We are committed to:</Typography>
                <Typography>
                    <ul>
                        <li>Providing a safe and welcoming environment for everyone involved in the Club.</li>
                        <li>Promoting the welfare, safety, and wellbeing of children and adults at risk.</li>
                        <li>Treating everyone with dignity, respect, and fairness.</li>
                        <li>Preventing abuse, bullying, harassment, and discrimination.</li>
                        <li>Taking safeguarding concerns seriously and responding appropriately.</li>
                        <li>Ensuring people know how to raise safeguarding concerns.</li>
                        <li>Following RFU safeguarding policies and applicable legislation.</li>
                    </ul>
                </Typography>
            </Section>

            <Section title="2. Who this policy applies to">
                <Typography>This policy applies to everyone involved in BSRFC activities, including:</Typography>
                <Typography>
                    <ul>
                        <li>Players and members.</li>
                        <li>Coaches and team managers.</li>
                        <li>Club officials and committee members.</li>
                        <li>Employees and volunteers.</li>
                        <li>Parents, carers, and guardians.</li>
                        <li>Match officials and spectators.</li>
                        <li>Visitors and contractors.</li>
                    </ul>
                </Typography>
                <Typography>
                    For the purposes of safeguarding children, a child is anyone under the age of 18.
                </Typography>
                <Typography>
                    The Club also recognises its responsibilities towards adults at risk, in accordance with RFU
                    safeguarding policies and applicable guidance.
                </Typography>
            </Section>

            <Section title="3. Safeguarding responsibilities">
                <Typography>
                    Safeguarding is a shared responsibility. Everyone involved in the Club is expected to act in a way
                    that promotes safety and wellbeing.
                </Typography>
                <Typography>
                    The Club&apos;s committee and leadership are responsible for supporting safeguarding arrangements
                    and ensuring that appropriate policies and procedures are in place.
                </Typography>
                <Typography>
                    The Club Safeguarding Officer is responsible for supporting the Club&apos;s safeguarding
                    arrangements, receiving concerns, and helping ensure that concerns are referred through the
                    appropriate channels.
                </Typography>
                <Typography>Safeguarding Officer: Claire Sanday</Typography>
                <Typography>Safeguarding contact: safeguarding@bsrfc.co.uk</Typography>
            </Section>

            <Section title="4. Expected behaviour">
                <Typography>
                    Everyone involved with BSRFC is expected to uphold the Core Values of rugby: Teamwork, Respect,
                    Enjoyment, Discipline, and Sportsmanship.
                </Typography>
                <Typography>Club members, officials, coaches, volunteers, and spectators must:</Typography>
                <Typography>
                    <ul>
                        <li>Treat others with respect and dignity.</li>
                        <li>Act responsibly and appropriately.</li>
                        <li>Respect personal boundaries and individual differences.</li>
                        <li>Avoid bullying, intimidation, harassment, and abusive behaviour.</li>
                        <li>Report safeguarding concerns rather than ignoring them.</li>
                        <li>Follow Club and RFU codes of conduct.</li>
                    </ul>
                </Typography>
            </Section>

            <Section title="5. Safer recruitment and training">
                <Typography>
                    The Club is committed to appropriate safer recruitment and safeguarding training for individuals
                    working with children or adults at risk.
                </Typography>
                <Typography>
                    Where required, the Club will ensure that relevant individuals complete appropriate DBS checks,
                    safeguarding training, and other required checks in accordance with current RFU regulations and
                    guidance.
                </Typography>
                <Typography>
                    DBS checks will be undertaken only where legally permitted and appropriate to the role.
                </Typography>
                <Typography>
                    The Club will maintain appropriate records of recruitment, training, and safeguarding compliance.
                </Typography>
            </Section>

            <Section title="6. Reporting safeguarding concerns">
                <Typography>
                    Any safeguarding concern, allegation, or disclosure must be taken seriously and reported promptly.
                </Typography>
                <Typography>If you have a concern:</Typography>
                <Typography>
                    <ol>
                        <li>Listen carefully and take the concern seriously.</li>
                        <li>Do not promise confidentiality where someone may be at risk.</li>
                        <li>Do not investigate the concern yourself or confront the person involved.</li>
                        <li>Record the information accurately and factually, where appropriate.</li>
                        <li>
                            Report the concern promptly to the Club Safeguarding Officer or the appropriate RFU
                            safeguarding contact.
                        </li>
                    </ol>
                </Typography>
                <Typography>
                    If someone is in immediate danger or requires urgent medical assistance, contact the emergency
                    services on 999.
                </Typography>
                <Typography>
                    Safeguarding concerns must not be ignored, concealed, or investigated independently by Club members.
                </Typography>
            </Section>

            <Section title="7. Safeguarding children">
                <Typography>
                    BSRFC is committed to ensuring that children can participate in rugby in a safe and enjoyable
                    environment.
                </Typography>
                <Typography>We will take appropriate steps to:</Typography>
                <Typography>
                    <ul>
                        <li>Promote children&apos;s welfare and listen to their views.</li>
                        <li>Ensure appropriate supervision and safe participation.</li>
                        <li>Follow relevant RFU age-grade rugby guidance.</li>
                        <li>Maintain appropriate standards of behaviour.</li>
                        <li>Respond appropriately to safeguarding concerns.</li>
                        <li>Provide suitable safeguarding information to parents, carers, and children.</li>
                    </ul>
                </Typography>
            </Section>

            <Section title="8. Safeguarding adults">
                <Typography>
                    The Club recognises that safeguarding responsibilities extend to adults, particularly adults who may
                    be at risk of abuse, neglect, or exploitation.
                </Typography>
                <Typography>
                    We are committed to promoting dignity, independence, inclusion, and safety for all adults involved
                    in Club activities.
                </Typography>
                <Typography>
                    Concerns involving adults will be handled in accordance with the applicable RFU safeguarding
                    procedures and relevant law.
                </Typography>
            </Section>

            <Section title="9. Photography, video, and online safety">
                <Typography>
                    Photography, video recording, and online communications involving children must be handled
                    responsibly and in accordance with RFU guidance.
                </Typography>
                <Typography>
                    The Club will take appropriate steps to protect children&apos;s privacy and safety when publishing
                    photographs, videos, team information, and other identifying material.
                </Typography>
                <Typography>
                    Coaches, volunteers, and other representatives must follow the Club&apos;s approved procedures for
                    communicating with children online.
                </Typography>
                <Typography>
                    [LINK TO APPROVED CLUB PHOTOGRAPHY, SOCIAL MEDIA, AND ONLINE COMMUNICATION GUIDANCE TO BE ADDED.]
                </Typography>
            </Section>

            <Section title="10. Confidentiality and records">
                <Typography>
                    Safeguarding information must be handled sensitively and shared only with individuals or
                    organisations who need it to protect someone or respond appropriately.
                </Typography>
                <Typography>
                    Confidentiality must never prevent a safeguarding concern from being reported to the appropriate
                    person or authority.
                </Typography>
                <Typography>
                    Safeguarding records must be stored securely and handled in accordance with applicable data
                    protection requirements and RFU guidance.
                </Typography>
            </Section>

            <Section title="11. Review and compliance">
                <Typography>
                    This policy will be reviewed regularly and whenever necessary to reflect changes in RFU
                    requirements, Club activities, or relevant legislation.
                </Typography>
                <Typography>
                    The Club will work with the RFU and relevant safeguarding bodies to ensure its safeguarding
                    arrangements remain appropriate.
                </Typography>
                <Typography>
                    This policy must be read alongside the current RFU Safeguarding Policy, Regulation 21, relevant
                    safeguarding guidance, and the Club&apos;s approved safeguarding procedures.
                </Typography>
            </Section>

            <Section title="12. Useful safeguarding contacts">
                <Typography>Club Safeguarding Officer: safeguarding@bsrfc.co.uk</Typography>
                <Typography>RFU Safeguarding: https://www.englandrugby.com/governance/safeguarding</Typography>
                <Typography>Emergency services: 999</Typography>
                <Typography>Police non-emergency: 101</Typography>
            </Section>
        </>
    );
}
