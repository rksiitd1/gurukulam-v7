import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://divyabiharmission.com").replace(/\/$/, "")
  const now = new Date()

  const staticPaths = [
    "",
    "about",
    "privacy",
    "terms",
    "refund-policy",
    "programs",
    "programs/gurukulam",
    "programs/shri-classes",
    "programs/agriculture",
    "programs/udyamita",
    "gallery",
    "blog",
    "contact",
    "volunteer",
    "internship",
    "donate",
    "about-founder",
    "manifesto",
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/$/, ""),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}


