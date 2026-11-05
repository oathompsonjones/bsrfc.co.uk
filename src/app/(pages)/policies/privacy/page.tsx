import { Disclaimer } from "components/pages/policies/disclaimer";
import { Heading } from "components/pages/policies/heading";
import type { ReactNode } from "react";
import { Section } from "components/pages/policies/section";
import { Typography } from "@mui/material";

/**
 * BSRFC Privacy Policy page component.
 * @returns The privacy policy content.
 */
// eslint-disable-next-line max-lines-per-function
export default function PrivacyPolicy(): ReactNode {
    return (
        <>
            <Disclaimer />

            <Heading title="Privacy Policy" updated="Not yet approved" />

            <Typography>
                Bishop&apos;s Stortford Rugby Football Club (“BSRFC”, “the Club”, “we”, “us” or “our”) respects your
                privacy and is committed to protecting your personal information.
            </Typography>
            <Typography>
                This Privacy Policy explains how we collect, use, store and share personal information when you visit
                our website, contact the Club, or otherwise interact with us.
            </Typography>
            <Typography>
                This policy applies to the BSRFC website and its associated online services. Other Club activities,
                including membership, player registration, and safeguarding, may be subject to additional privacy
                information.
            </Typography>

            <Section title="1. Who we are">
                <Typography>
                    The website is operated on behalf of Bishop&apos;s Stortford Rugby Football Club.
                </Typography>
                <Typography>
                    The Club is the data controller for personal information processed for the purposes described in
                    this policy, where applicable.
                </Typography>
                <Typography>Club name: Bishop&apos;s Stortford Rugby Football Club</Typography>
                <Typography>Registered company number: 09612222</Typography>
                <Typography>Registered charity number: 1162479</Typography>
                <Typography>
                    Club address: Silver Leys, Hadham Road, Bishop&apos;s Stortford, Hertfordshire, CM23 2QE.
                </Typography>
                <Typography>Privacy enquiries: [CONFIRM PRIVACY CONTACT EMAIL]</Typography>
            </Section>

            <Section title="2. Information we may collect">
                <Typography>
                    Depending on how you interact with the website, we may collect the following types of personal
                    information:
                </Typography>
                <Typography>
                    <ul>
                        <li>
                            Contact information, such as your name, email address, and telephone number, when you
                            contact the Club.
                        </li>
                        <li>Information included in enquiries, messages, feedback, or correspondence.</li>
                        <li>
                            Technical information, such as your IP address, browser type, operating system, and
                            information about how you access the website.
                        </li>
                        <li>
                            Website usage information, such as pages visited, referral sources, and interactions with
                            website features, where analytics are used.
                        </li>
                        <li>
                            Information relating to membership, players, volunteers, events, or other Club activities,
                            where such information is collected through website forms or linked services.
                        </li>
                    </ul>
                </Typography>
                <Typography>
                    We do not intentionally collect personal information through website forms unless it is necessary
                    for the relevant enquiry or service.
                </Typography>
            </Section>

            <Section title="3. How we use your information">
                <Typography>We may use personal information for the following purposes:</Typography>
                <Typography>
                    <ul>
                        <li>Responding to enquiries and requests.</li>
                        <li>Providing information about the Club and its activities.</li>
                        <li>Managing website functionality and security.</li>
                        <li>Improving the website and understanding its usage.</li>
                        <li>Administering membership, events, and Club activities.</li>
                        <li>Meeting legal, regulatory, and safeguarding obligations.</li>
                        <li>Communicating relevant Club information.</li>
                    </ul>
                </Typography>
                <Typography>
                    We will not use personal information for purposes that are incompatible with the purpose for which
                    it was collected, unless permitted by law.
                </Typography>
            </Section>

            <Section title="4. Our lawful basis for processing">
                <Typography>
                    Under UK data protection law, we must have a lawful basis for processing personal information.
                </Typography>
                <Typography>Depending on the circumstances, the Club may rely on:</Typography>
                <Typography>
                    <ul>
                        <li>
                            <strong>Consent:</strong> where you have voluntarily agreed to a particular use of your
                            information.
                        </li>
                        <li>
                            <strong>Contract:</strong> where processing is necessary to provide a service or fulfil an
                            agreement with you.
                        </li>
                        <li>
                            <strong>Legitimate interests:</strong> where processing is necessary for the Club&apos;s
                            legitimate interests and those interests are not overridden by your rights.
                        </li>
                        <li>
                            <strong>Legal obligation:</strong> where processing is necessary to comply with the law.
                        </li>
                        <li>
                            <strong>Vital interests:</strong> where processing is necessary to protect someone&apos;s
                            life in exceptional circumstances.
                        </li>
                    </ul>
                </Typography>
                <Typography>
                    The Club will identify and document the appropriate lawful basis for each processing activity before
                    this policy is approved.
                </Typography>
            </Section>

            <Section title="5. Cookies and website analytics">
                <Typography>
                    Our website may use cookies or similar technologies to provide essential functionality, improve
                    performance, and understand how visitors use the website.
                </Typography>
                <Typography>Essential cookies may be necessary for the website to function correctly.</Typography>
                <Typography>
                    Where required by law, non-essential cookies, including analytics or advertising cookies, will only
                    be used with your consent.
                </Typography>
                <Typography>
                    You may be able to manage cookies through your browser settings or the website&apos;s cookie
                    preferences.
                </Typography>
                <Typography>
                    [CONFIRM WHETHER THE WEBSITE USES GOOGLE ANALYTICS, OTHER ANALYTICS SERVICES, OR ANY NON-ESSENTIAL
                    COOKIES.]
                </Typography>
            </Section>

            <Section title="6. Sharing your information">
                <Typography>We do not sell your personal information.</Typography>
                <Typography>
                    We may share personal information with trusted organisations and service providers where necessary
                    to operate the website or administer Club activities.
                </Typography>
                <Typography>
                    These may include:
                    <ul>
                        <li>Website hosting and infrastructure providers.</li>
                        <li>Email and communications providers.</li>
                        <li>Website analytics providers, where applicable.</li>
                        <li>
                            The Rugby Football Union (RFU), relevant rugby governing bodies, or other organisations
                            where required for legitimate Club activities.
                        </li>
                        <li>
                            Relevant authorities where required by law or necessary to protect someone&apos;s safety.
                        </li>
                    </ul>
                </Typography>
                <Typography>
                    Service providers are expected to handle personal information appropriately and in accordance with
                    applicable data protection requirements.
                </Typography>
            </Section>

            <Section title="7. International transfers">
                <Typography>
                    Some of our website or communications service providers may process personal information outside the
                    United Kingdom.
                </Typography>
                <Typography>
                    Where personal information is transferred internationally, we will ensure that appropriate
                    safeguards are in place where required by UK data protection law.
                </Typography>
                <Typography>
                    [CONFIRM WHETHER ANY WEBSITE PROVIDERS STORE OR PROCESS PERSONAL DATA OUTSIDE THE UK.]
                </Typography>
            </Section>

            <Section title="8. How long we retain information">
                <Typography>
                    We retain personal information only for as long as necessary for the purposes for which it was
                    collected, or for as long as we are legally required to retain it.
                </Typography>
                <Typography>
                    Retention periods depend on the type of information, the purpose of processing, and any applicable
                    legal or safeguarding requirements.
                </Typography>
                <Typography>
                    [THE CLUB SHOULD DOCUMENT RETENTION PERIODS FOR WEBSITE ENQUIRIES, MEMBERSHIP RECORDS, AND OTHER
                    RELEVANT DATA.]
                </Typography>
            </Section>

            <Section title="9. Keeping information secure">
                <Typography>
                    We take appropriate technical and organisational measures to protect personal information against
                    accidental loss, unauthorised access, alteration, disclosure, or destruction.
                </Typography>
                <Typography>
                    Access to personal information is restricted to individuals who need it for legitimate Club
                    purposes.
                </Typography>
                <Typography>
                    However, no method of transmission or storage can be guaranteed to be completely secure.
                </Typography>
            </Section>

            <Section title="10. Your data protection rights">
                <Typography>
                    Depending on the circumstances, you may have the following rights under UK data protection law:
                </Typography>
                <Typography>
                    <ul>
                        <li>The right to access your personal information.</li>
                        <li>The right to correct inaccurate information.</li>
                        <li>The right to request deletion of your information.</li>
                        <li>The right to restrict or object to certain processing.</li>
                        <li>The right to data portability, where applicable.</li>
                        <li>The right to withdraw consent where processing is based on consent.</li>
                    </ul>
                </Typography>
                <Typography>To exercise your rights, please contact: [CONFIRM PRIVACY CONTACT EMAIL]</Typography>
                <Typography>
                    You also have the right to complain to the Information Commissioner&apos;s Office (ICO) if you
                    believe your personal information has been handled improperly.
                </Typography>
                <Typography>Website: https://ico.org.uk/</Typography>
            </Section>

            <Section title="11. Children&apos;s information">
                <Typography>
                    BSRFC provides rugby activities for children and young people. We recognise the importance of
                    protecting their personal information and communicating privacy information in a clear and
                    age-appropriate manner.
                </Typography>
                <Typography>
                    Personal information relating to junior players may be processed for legitimate Club activities,
                    including registration, communications, safeguarding, and administration.
                </Typography>
                <Typography>
                    We will take appropriate care when collecting or publishing information relating to children,
                    particularly photographs, videos, and identifying information.
                </Typography>
            </Section>

            <Section title="12. Links to other websites">
                <Typography>
                    Our website may contain links to third-party websites, including the RFU, sponsors, and other
                    organisations.
                </Typography>
                <Typography>
                    We are not responsible for the privacy practices or content of external websites. You should review
                    their privacy policies when visiting them.
                </Typography>
            </Section>

            <Section title="13. Changes to this policy">
                <Typography>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, services,
                    or legal obligations.
                </Typography>
                <Typography>The latest version will be published on this website.</Typography>
            </Section>

            <Section title="14. Contact us">
                <Typography>
                    If you have questions about this Privacy Policy or how the Club handles your personal information,
                    please contact:
                </Typography>
                <Typography>Bishop&apos;s Stortford Rugby Football Club</Typography>
                <Typography>Silver Leys, Hadham Road, Bishop&apos;s Stortford, Hertfordshire, CM23 2QE.</Typography>
                <Typography>Email: [CONFIRM PRIVACY CONTACT EMAIL]</Typography>
            </Section>
        </>
    );
}
