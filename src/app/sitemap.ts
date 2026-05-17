import type { MetadataRoute } from "next";
import { drawingsBWProjects } from "@/lib/content/drawingsbw-projects";
import { aiRenderItems } from "@/lib/content/airender-items";
import { drawingsColorProjects } from "@/lib/content/drawings-colors-projects";


export const revalidate = 86400;

const routes = [
  "",
  "/drawings-bw",
  "/drawings-colors",
  "/ai-renders",
  "/projects",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const detailRoutes = [
    ...drawingsBWProjects.map((project) => `/drawings-bw/${project.slug}`),
    ...drawingsColorProjects.map((project) => `/drawings-colors/${project.slug}`),
    ...aiRenderItems.map((item) => `/ai-renders/${item.slug}`),
  ];

  const allRoutes = [...routes, ...detailRoutes];

  return allRoutes.map((route) => ({
    url: `https://dsrenders.com${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
