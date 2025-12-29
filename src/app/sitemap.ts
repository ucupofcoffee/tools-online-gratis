import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
  "",
  "/about",
  "/privacy-policy",
  "/tools/kalkulator-gaji",
  "/artikel/cara-membagi-gaji-50-30-20",
];

  const now = new Date();

  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
