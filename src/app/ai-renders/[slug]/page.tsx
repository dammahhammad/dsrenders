import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aiRenderItems } from "@/lib/content/airender-items";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return aiRenderItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = aiRenderItems.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "Product Not Found",
      description: "The requested furniture product could not be found.",
    };
  }

  const title = `${item.name} | Furniture Collection`;
  const description = item.description;
  const url = `/ai-renders/${item.slug}`;

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
          url: item.images[0],
          width: 1200,
          height: 630,
          alt: `${item.name} product preview`,
        },
      ],
    },
  };
}

export default async function FurnitureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = aiRenderItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const itemUrl = `https://dsrenders.com/ai-renders/${item.slug}`;
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
        name: "Furniture",
        item: "https://dsrenders.com/ai-renders",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.name,
        item: itemUrl,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.description,
    category: item.category,
    image: item.images,
    sku: item.slug,
    brand: {
      "@type": "Brand",
      name: "DS Renders",
    }
  };

  const relatedItems = aiRenderItems
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto sm:px-20 px-8 py-32 sm:px-6 lg:px-8 z-10 sticky top-0 relative bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="mb-8">
        <Link
          href="/ai-renders"
          className="text-xs uppercase tracking-[0.2em] text-foreground/70 transition hover:text-foreground"
        >
          ← Back to Furniture
        </Link>
      </div>

      <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div
          className={`grid grid-cols-2 gap-3 sm:grid-cols-${item.images.length}`}
        >
          {item.images.map((imagePath, index) => (
            <div
              key={`${item.slug}-${index}`}
              className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-secondary/20"
            >
              <Image
                src={imagePath}
                alt={`${item.name} image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>

        <article className="space-y-6">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
              {item.category}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {item.name}
            </h1>
            <p className="text-foreground/75">{item.description}</p>
          </header>

          <div>
            <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-foreground/60">
              Design Notes
            </h2>
            <ul className="space-y-2 text-sm text-foreground/80">
              {item.designNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-md border border-border/60 bg-secondary/20 px-3 py-2"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="mt-12 border-t border-border/60 pt-8">
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-foreground/60">
          Related Pieces
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedItems.map((entry) => (
            <Link
              key={entry.slug}
              href={`/ai-renders/${entry.slug}`}
              className="rounded-lg border border-border/60 bg-secondary/20 px-4 py-3 text-sm text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
            >
              {entry.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
