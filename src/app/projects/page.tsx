import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse DS Renders projects across architecture, interiors, and furniture design portfolios.",
  alternates: {
    canonical: "/projects",
  },
};

const categories = [
  {
    title: "Architecture",
    description: "Large-scale residential, commercial, and civic architecture projects.",
    href: "/architecture",
  },
  {
    title: "Interiors",
    description: "Residential and hospitality interiors focused on atmosphere and function.",
    href: "/interiors",
  },
  {
    title: "Furniture",
    description: "Bespoke furniture collections balancing material, craft, and usability.",
    href: "/furniture",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <section className="container-custom py-20 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-xs sm:text-sm font-body uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Portfolio Index
          </p>
          <h1 className="font-display font-bold text-foreground">All Projects</h1>
          <p className="mt-4 text-muted-foreground font-body">
            Explore work across all DS Renders disciplines.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="rounded-2xl border border-border/60 bg-card/40 p-6 hover:border-accent/40 transition-colors"
            >
              <h2 className="text-xl font-display font-semibold text-foreground">{category.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              <p className="mt-4 text-sm text-accent">Explore →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
