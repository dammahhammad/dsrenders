import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { architectureProjects } from "@/lib/content/architecture-projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return architectureProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = architectureProjects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested architecture project could not be found.",
    };
  }

  const title = `${project.title} | Architecture Project`;
  const description = project.description;
  const url = `/architecture/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} preview image`,
        },
      ],
    },
  };
}

export default async function ArchitectureProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = architectureProjects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `https://dsrenders.com/architecture/${project.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dsrenders.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Architecture",
        item: "https://dsrenders.com/architecture",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: [project.image, ...project.images],
    dateCreated: project.year,
    contentLocation: {
      "@type": "Place",
      name: project.location,
    },
    url: projectUrl,
    creator: {
      "@type": "Organization",
      name: "DS Renders",
      url: "https://dsrenders.com",
    },
  };

  const relatedProjects = architectureProjects
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto sm:px-20 px-8 py-32 sm:px-6 lg:px-8 z-10 sticky top-0 relative bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="mb-8">
        <Link
          href="/architecture"
          className="text-xs uppercase tracking-[0.2em] text-foreground/70 transition hover:text-foreground"
        >
          ← Back to Architecture
        </Link>
      </div>

      <header className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
          {project.location} · {project.year}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="max-w-3xl text-base text-foreground/75 sm:text-lg">{project.description}</p>
      </header>

      <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-secondary/30">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 1152px"
        />
      </div>

      <section className="mb-12 max-w-3xl">
        <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-foreground/60">Overview</h2>
        <p className="leading-relaxed text-foreground/80">{project.longDescription}</p>
      </section>

      <section>
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-foreground/60">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((imagePath, index) => (
            <div
              key={imagePath}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-secondary/30"
            >
              <Image
                src={imagePath}
                alt={`${project.title} gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border/60 pt-8">
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-foreground/60">Related Projects</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProjects.map((entry) => (
            <Link
              key={entry.slug}
              href={`/architecture/${entry.slug}`}
              className="rounded-lg border border-border/60 bg-secondary/20 px-4 py-3 text-sm text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
            >
              {entry.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
