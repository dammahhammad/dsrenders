import type { MetadataRoute } from "next";

export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dsrenders.com/sitemap.xml",
    host: "https://dsrenders.com",
  };
}
