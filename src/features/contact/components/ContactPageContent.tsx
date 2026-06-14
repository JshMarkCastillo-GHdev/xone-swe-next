import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BRAND_NAME,
  buildContactMailto,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/brand";

export function ContactPageContent() {
  return (
    <div className="bg-xone-section px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-5xl">
            Contact {BRAND_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Email us about your project. We respond within one business day to
            schedule a discovery call.
          </p>
        </header>

        <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Get in touch
          </h2>

          <ul className="space-y-6 text-muted-foreground">
            <li className="flex items-start gap-4">
              <Mail
                className="mt-0.5 size-5 shrink-0 text-xone-violet"
                aria-hidden
              />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="mt-1 text-sm">
                  Primary way to reach us — click below to open your mail app.
                </p>
                <a
                  href={buildContactMailto()}
                  className="mt-2 block text-xone-violet transition-colors hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone
                className="mt-0.5 size-5 shrink-0 text-xone-violet"
                aria-hidden
              />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="mt-1 block transition-colors hover:text-xone-violet"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-xone-violet"
                aria-hidden
              />
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="mt-1">{CONTACT_LOCATION}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
            <a
              href={buildContactMailto("Project inquiry")}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Mail className="size-4" aria-hidden />
              Email us
            </a>
            <Link
              href="/projects"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              View our projects
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Online contact forms are planned for a future release. For now, email
          is the fastest path to a qualified conversation.
        </p>
      </div>
    </div>
  );
}
