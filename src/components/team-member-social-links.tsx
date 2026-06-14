import type { IconType } from "react-icons";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/team-members";

type TeamMemberSocialLinksProps = {
  member: Pick<TeamMember, "name" | "linkedin" | "github" | "portfolio">;
  className?: string;
};

type SocialLinkItem = {
  href: string;
  label: string;
  Icon: IconType;
};

function getSocialLinks(
  member: Pick<TeamMember, "name" | "linkedin" | "github" | "portfolio">,
): SocialLinkItem[] {
  const links: SocialLinkItem[] = [];

  if (member.linkedin) {
    links.push({
      href: member.linkedin,
      label: `${member.name} on LinkedIn`,
      Icon: FaLinkedin,
    });
  }

  if (member.github) {
    links.push({
      href: member.github,
      label: `${member.name} on GitHub`,
      Icon: FaGithub,
    });
  }

  if (member.portfolio) {
    links.push({
      href: member.portfolio,
      label: `${member.name} portfolio`,
      Icon: FaGlobe,
    });
  }

  return links;
}

export function TeamMemberSocialLinks({
  member,
  className,
}: TeamMemberSocialLinksProps) {
  const links = getSocialLinks(member);

  if (links.length === 0) {
    return null;
  }

  return (
    <ul
      className={cn(
        "mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start",
        className,
      )}
      aria-label={`${member.name} profiles`}
    >
      {links.map(({ href, label, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground",
              "motion-safe:transition-colors motion-safe:duration-200",
              "hover:border-xone-violet/40 hover:bg-xone-violet/10 hover:text-xone-violet",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-xone-violet focus-visible:ring-offset-2",
            )}
          >
            <Icon className="size-4 shrink-0" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
