import { BlogPost } from "@/components/blog/blog-post"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main>
      <BlogPost slug={params.slug} />
    </main>
  )
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
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
