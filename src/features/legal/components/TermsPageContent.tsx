import { LegalPageLayout } from "@/features/legal/components/LegalPageLayout";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";

const LAST_UPDATED = "June 14, 2026";

export function TermsPageContent() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={`These Terms of Service ("Terms") govern your access to and use of the ${BRAND_NAME} marketing website. By using this site, you agree to these Terms. If you do not agree, please do not use the site. Custom software engagements are governed by separate written agreements signed with clients.`}
      sections={[
        {
          id: "use-of-site",
          title: "Use of the website",
          paragraphs: [
            "You may use this site for lawful purposes only. You agree not to interfere with site operation, attempt unauthorized access, scrape content in violation of applicable law, or use the site to transmit malware or abusive content.",
          ],
        },
        {
          id: "services",
          title: "Marketing content vs. professional services",
          paragraphs: [
            "Information on this site describes our capabilities, process, and sample work. It is informational and does not constitute a binding offer. Project scope, timelines, fees, and deliverables are defined only in a mutually executed statement of work or contract.",
          ],
        },
        {
          id: "intellectual-property",
          title: "Intellectual property",
          paragraphs: [
            "Unless otherwise noted, Xone owns the text, design, logos, and other materials on this site. You may view and share links to our pages for personal or business reference. You may not copy, modify, distribute, or create derivative works from site content without our prior written consent.",
            "Client project deliverables and ownership terms are addressed in individual client agreements, not in these Terms.",
          ],
        },
        {
          id: "third-party-links",
          title: "Third-party links",
          paragraphs: [
            "Our site may link to external websites or portfolio demos. We are not responsible for the content, privacy practices, or availability of third-party sites. Accessing external links is at your own risk.",
          ],
        },
        {
          id: "disclaimers",
          title: "Disclaimers",
          paragraphs: [
            'This site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the site will be uninterrupted or error-free.',
          ],
        },
        {
          id: "limitation-of-liability",
          title: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, Xone and its team members will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this site. Our total liability for claims related to the site is limited to one hundred U.S. dollars (USD $100) or the minimum amount permitted by law, whichever is greater.",
          ],
        },
        {
          id: "indemnity",
          title: "Indemnification",
          paragraphs: [
            "You agree to indemnify and hold harmless Xone from claims arising out of your misuse of the site or violation of these Terms, to the extent permitted by applicable law.",
          ],
        },
        {
          id: "governing-law",
          title: "Governing law",
          paragraphs: [
            "These Terms are governed by the laws of the United States and the state in which Xone primarily operates, without regard to conflict-of-law principles. Disputes will be resolved in the courts of that jurisdiction, unless otherwise required by mandatory local law.",
          ],
        },
        {
          id: "changes",
          title: "Changes to these Terms",
          paragraphs: [
            'We may revise these Terms from time to time. Material changes will be reflected by updating the "Last updated" date. Your continued use of the site after changes become effective constitutes acceptance of the revised Terms.',
          ],
        },
        {
          id: "contact",
          title: "Contact",
          paragraphs: [
            `Questions about these Terms may be sent to ${CONTACT_EMAIL} or via our Contact page.`,
          ],
        },
      ]}
    />
  );
}
