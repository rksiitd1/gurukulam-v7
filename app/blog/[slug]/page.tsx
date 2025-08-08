import { BlogPost } from "@/components/blog/blog-post"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-posts"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <main>
      <BlogPost slug={slug} />
    </main>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) {
    return {
      title: "Story",
      description: "Stories and updates from Divya Bihar Mission.",
    }
  }
  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      images: [post.image || "/og-image.jpg"],
    },
  }
}
