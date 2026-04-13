import type { MetadataRoute } from "next";
import { architectureProjects } from "@/lib/content/architecture-projects";
import { interiorProjects } from "@/lib/content/interior-projects";
import { furnitureItems } from "@/lib/content/furniture-items";

export const revalidate = 86400;

const routes = [
  "",
  "/architecture",
  "/interiors",
  "/furniture",
  "/projects",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const detailRoutes = [
    ...architectureProjects.map((project) => `/architecture/${project.slug}`),
    ...interiorProjects.map((project) => `/interiors/${project.slug}`),
    ...furnitureItems.map((item) => `/furniture/${item.slug}`),
  ];

  const allRoutes = [...routes, ...detailRoutes];

  return allRoutes.map((route) => ({
    url: `https://dsrenders.com${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
