import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blogPosts";
import { cityPages } from "@/lib/cityPages";
import { siteUrl, sohbetPages } from "@/lib/sohbetSeoPages";

const staticRoutes = [
  "",
  "sohbet",
  "sohbet-odalari",
  "mobil-sohbet",
  "irc-sohbet",
  "mirc-indir",
  "zurna-chat",
  "zurna-sohbet",
  "zurna-radyo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls = staticRoutes.map((route) => ({
    url: route ? `${siteUrl}/${route}` : siteUrl,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route ? 0.8 : 1,
  }));

  const seoUrls = Object.keys(sohbetPages).map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogUrls = getBlogPosts().map((post) => ({
    url: `${siteUrl}/yazi/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cityUrls = cityPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...seoUrls, ...blogUrls, ...cityUrls];
}
