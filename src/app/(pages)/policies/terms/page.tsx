import { Disclaimer } from "components/pages/policies/disclaimer";
import { Heading } from "components/pages/policies/heading";
import type { ReactNode } from "react";
import { Section } from "components/pages/policies/section";
import { Typography } from "@mui/material";

/**
 * BSRFC Website Terms and Conditions page component.
 * @returns The terms and conditions content.
 */
// eslint-disable-next-line max-lines-per-function
export default function TermsAndConditions(): ReactNode {
    return (
        <>
            <Disclaimer />

            <Heading title="Website Terms and Conditions" updated="Not yet approved" />

            <Typography>
                These Terms and Conditions govern your use of the Bishop&apos;s Stortford Rugby Football Club website
                (“the Website”).
            </Typography>
            <Typography>
                By accessing or using the Website, you agree to comply with these Terms and Conditions. If you do not
                agree with them, please do not use the Website.
            </Typography>

            <Section title="1. About the Club">
                <Typography>
                    The Website is operated on behalf of Bishop&apos;s Stortford Rugby Football Club (“BSRFC”, “the
                    Club”, “we”, “us”, or “our”).
                </Typography>
                <Typography>
                    The Club is based at Silver Leys, Hadham Road, Bishop&apos;s Stortford, Hertfordshire, CM23 2QE.
                </Typography>
                <Typography>Company number: 09612222.</Typography>
                <Typography>Charity number: 1162479.</Typography>
            </Section>

            <Section title="2. Use of the Website">
                <Typography>
                    You may use the Website for lawful purposes and to obtain information about the Club, its teams,
                    fixtures, events, activities, and services.
                </Typography>
                <Typography>You agree not to:</Typography>
                <Typography>
                    <ul>
                        <li>Use the Website in a way that breaches applicable laws or regulations.</li>
                        <li>Attempt to gain unauthorised access to the Website, its systems, or related services.</li>
                        <li>
                            Introduce malicious software or interfere with the operation or security of the Website.
                        </li>
                        <li>Use the Website to distribute spam, fraudulent material, or harmful content.</li>
                        <li>Misuse contact information or personal information published on the Website.</li>
                        <li>Use the Website in a manner that could harm the Club, its members, or other users.</li>
                    </ul>
                </Typography>
            </Section>

            <Section title="3. Website information">
                <Typography>
                    The Website provides information about the Club, including fixtures, results, teams, events, news,
                    sponsors, and other activities.
                </Typography>
                <Typography>
                    We endeavour to ensure that information is accurate and up to date. However, fixtures, events,
                    results, and other information may change without notice.
                </Typography>
                <Typography>
                    The Website is provided for general information purposes and should not be treated as the definitive
                    source for information where confirmation is required.
                </Typography>
                <Typography>
                    Please contact the Club directly if you require confirmation of any information.
                </Typography>
            </Section>

            <Section title="4. Intellectual property">
                <Typography>
                    Unless otherwise stated, the Website and its original content, including text, graphics, branding,
                    design, and other materials, are owned by or used under licence by the Club.
                </Typography>
                <Typography>
                    The BSRFC name, logos, and other Club branding may not be reproduced or used commercially without
                    the Club&apos;s prior permission.
                </Typography>
                <Typography>
                    You may view, download, or print Website content for personal, non-commercial use, provided that you
                    do not remove relevant copyright notices or other acknowledgements.
                </Typography>
                <Typography>
                    Third-party trademarks, logos, photographs, and other materials remain the property of their
                    respective owners.
                </Typography>
            </Section>

            <Section title="5. Photographs and video">
                <Typography>
                    The Website may contain photographs and videos of Club activities, matches, players, supporters,
                    volunteers, and events.
                </Typography>
                <Typography>
                    These materials may be subject to copyright, privacy rights, and safeguarding considerations.
                </Typography>
                <Typography>
                    You must not download, reproduce, distribute, or republish photographs or videos for commercial
                    purposes or in a way that breaches applicable rights or safeguarding requirements.
                </Typography>
                <Typography>
                    If you have a concern about an image or video published on the Website, please contact the Club.
                </Typography>
            </Section>

            <Section title="6. Third-party websites and services">
                <Typography>
                    The Website may link to external websites, including the RFU, sponsors, ticketing services, Club
                    shops, and other organisations.
                </Typography>
                <Typography>These links are provided for convenience and information.</Typography>
                <Typography>
                    The Club does not control third-party websites and is not responsible for their content,
                    availability, security, or terms of use.
                </Typography>
                <Typography>Your use of third-party websites is subject to their own terms and policies.</Typography>
            </Section>

            <Section title="7. Website availability">
                <Typography>We aim to keep the Website available and functioning correctly.</Typography>
                <Typography>
                    However, we do not guarantee uninterrupted availability. The Website may occasionally be unavailable
                    due to maintenance, technical issues, or circumstances outside our control.
                </Typography>
                <Typography>
                    We reserve the right to modify, suspend, or discontinue any part of the Website without notice.
                </Typography>
            </Section>

            <Section title="8. Disclaimer and liability">
                <Typography>
                    To the extent permitted by law, the Website is provided without guarantees that it will be
                    error-free, uninterrupted, or suitable for every purpose.
                </Typography>
                <Typography>
                    Nothing in these Terms and Conditions excludes or limits liability where doing so would be unlawful,
                    including liability for death or personal injury caused by negligence, fraud, or fraudulent
                    misrepresentation.
                </Typography>
                <Typography>
                    Nothing in these Terms and Conditions affects any rights you may have under applicable law that
                    cannot be excluded or limited.
                </Typography>
            </Section>

            <Section title="9. Privacy">
                <Typography>
                    Our collection and use of personal information through the Website is described in our Privacy
                    Policy.
                </Typography>
                <Typography>
                    Please refer to the Privacy Policy for information about how we process personal information and
                    your rights.
                </Typography>
            </Section>

            <Section title="10. Changes to these Terms">
                <Typography>We may update these Terms and Conditions from time to time.</Typography>
                <Typography>The latest version will be published on the Website.</Typography>
            </Section>

            <Section title="11. Governing law">
                <Typography>These Terms and Conditions are governed by the laws of England and Wales.</Typography>
                <Typography>
                    Any disputes arising in connection with these Terms and Conditions will be subject to the
                    jurisdiction of the courts of England and Wales, subject to applicable legal requirements.
                </Typography>
            </Section>

            <Section title="12. Contact">
                <Typography>If you have any questions about these Terms and Conditions, please contact:</Typography>
                <Typography>Bishop&apos;s Stortford Rugby Football Club</Typography>
                <Typography>Silver Leys, Hadham Road, Bishop&apos;s Stortford, Hertfordshire, CM23 2QE.</Typography>
                <Typography>Email: secretary@bsrfc.co.uk</Typography>
            </Section>
        </>
    );
}
