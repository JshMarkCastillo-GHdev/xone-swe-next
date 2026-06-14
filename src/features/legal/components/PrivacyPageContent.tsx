import { LegalPageLayout } from "@/features/legal/components/LegalPageLayout";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";

const LAST_UPDATED = "June 14, 2026";

export function PrivacyPageContent() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={`${BRAND_NAME} ("Xone," "we," "us") respects your privacy. This policy describes what information we collect when you visit our website, how we use it, and the choices available to you. Our v1 marketing site does not offer user accounts or online contact forms; lead capture is email-only via your mail client.`}
      sections={[
        {
          id: "information-we-collect",
          title: "Information we collect",
          paragraphs: [
            "We collect limited information automatically when you browse our public pages, such as IP address, browser type, device type, referring URL, and pages viewed. If you email us, we receive the contents of your message and any contact details you choose to include.",
          ],
          listItems: [
            "Server and analytics logs (standard web hosting telemetry)",
            "Information you voluntarily send by email or phone",
            "Cookie or local storage data only where required for basic site functionality",
          ],
        },
        {
          id: "how-we-use-information",
          title: "How we use information",
          paragraphs: [
            "We use collected information to operate and improve the website, respond to inquiries, understand aggregate traffic patterns, and protect against abuse or security incidents. We do not sell personal information.",
          ],
          listItems: [
            "Respond to project inquiries and schedule discovery calls",
            "Maintain site security, uptime, and performance",
            "Comply with applicable legal obligations",
          ],
        },
        {
          id: "cookies",
          title: "Cookies and similar technologies",
          paragraphs: [
            "Our marketing site is primarily static. We may use essential cookies required by our hosting provider or analytics tools configured at deploy time. You can control cookies through your browser settings; disabling cookies may affect limited features.",
          ],
        },
        {
          id: "sharing",
          title: "When we share information",
          paragraphs: [
            "We share information only with service providers that help us host and operate the site (for example, Vercel), when required by law, or to protect our rights and users. Providers are bound by contractual obligations to handle data appropriately.",
          ],
        },
        {
          id: "retention",
          title: "Data retention",
          paragraphs: [
            "Server logs are retained for a limited period consistent with hosting defaults and security needs. Email correspondence is retained as long as needed to manage the business relationship or as required for record-keeping.",
          ],
        },
        {
          id: "your-rights",
          title: "Your choices and rights",
          paragraphs: [
            "Depending on your location, you may have rights to access, correct, delete, or restrict certain processing of personal information. Because we do not operate user accounts on this site, most requests relate to email correspondence or analytics data tied to your visit.",
            `To exercise privacy rights or ask questions, contact us at ${CONTACT_EMAIL}. We will respond within a reasonable timeframe.`,
          ],
        },
        {
          id: "children",
          title: "Children's privacy",
          paragraphs: [
            "Our services are directed to businesses and professionals. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, contact us so we can delete it.",
          ],
        },
        {
          id: "changes",
          title: "Changes to this policy",
          paragraphs: [
            "We may update this Privacy Policy to reflect product, legal, or operational changes. The \"Last updated\" date at the top will change when we publish revisions. Continued use of the site after updates constitutes acceptance of the revised policy.",
          ],
        },
      ]}
    />
  );
}
