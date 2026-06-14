import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { PillButton } from "@/components/marketing/pill-button";
import { cn } from "@/lib/utils";

type LearnMoreButtonProps = {
  className?: string;
  href?: string;
};

export function LearnMoreButton({
  className,
  href = "/services",
}: LearnMoreButtonProps) {
  return (
    <Link href={href} className="inline-flex">
      <PillButton className={cn("gap-2", className)}>
        Learn More
        <ChevronRight className="size-5" aria-hidden />
      </PillButton>
    </Link>
  );
}
