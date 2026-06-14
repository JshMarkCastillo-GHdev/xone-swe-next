import Link from "next/link";
import Image from "next/image";

import { brandAssets, BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={brandAssets.logo}
            alt={BRAND_NAME}
            width={140}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-started"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
