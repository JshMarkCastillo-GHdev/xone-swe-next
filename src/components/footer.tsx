import Link from "next/link";
import Image from "next/image";

import { brandAssets, BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-border bg-xone-navy text-xone-light", className)}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Image
            src={brandAssets.logoInverse}
            alt={BRAND_NAME}
            width={140}
            height={36}
            className="h-8 w-auto"
          />
          <p className="text-sm text-xone-gray-light/90">
            Custom software development for teams that need clarity, speed, and
            reliable delivery.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h2>
          <ul className="space-y-2 text-sm text-xone-gray-light/90">
            <li>
              <Link href="/projects" className="hover:text-white">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Web &amp; Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-white">
                Our Process
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h2>
          <ul className="space-y-2 text-sm text-xone-gray-light/90">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-xone-gray-light/70">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
