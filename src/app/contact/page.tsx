import type { Metadata } from "next";
import { CONTACT_CONFIG } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with DS Renders. Reach out for architecture, interior design, or furniture collaboration.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background mx-auto sm:px-20 px-8 py-16 sm:px-6 lg:px-8 z-10 sticky top-0 relative">
      <section className="container-custom py-20 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-xs sm:text-sm font-body uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Contact
          </p>
          <h1 className="font-display font-bold text-foreground">Let&apos;s Build Something Meaningful</h1>
          <p className="mt-4 text-muted-foreground font-body">
            Tell us about your project vision and timeline.
          </p>
        </header>

        <div className="mt-10 max-w-2xl rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8">
          <p className="text-sm text-muted-foreground">Email</p>
          <a
            href={`mailto:${CONTACT_CONFIG.CONTACT_EMAIL}`}
            className="mt-1 inline-block text-lg font-medium text-foreground hover:text-accent transition-colors"
          >
            {CONTACT_CONFIG.CONTACT_EMAIL}
          </a>

          <p className="mt-8 text-sm text-muted-foreground">
            Prefer direct contact? Send your brief and references to the address above. We typically reply within 1–2 business days.
          </p>
        </div>
      </section>
    </main>
  );
}
