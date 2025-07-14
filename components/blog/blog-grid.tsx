"use client"

import Link from "next/link"
import { Calendar, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { blogPosts } from "@/lib/blog-posts"

export function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(12)

  // Sort posts by id in descending order
  const sortedPosts = blogPosts.slice().sort((a, b) => b.id - a.id)
  const displayedPosts = sortedPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < sortedPosts.length

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, sortedPosts.length))
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest insights, success stories, and educational content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full rounded-none relative">
              <div className="relative rounded-none">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 flex flex-col justify-between h-full relative">
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-auto">
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <button className="text-gray-400 hover:text-blue-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                {/* Read More Button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Read More</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button
          onClick={loadMorePosts}
          disabled={!hasMorePosts}
          size="lg"
          variant="outline"
          className="border-blue-600 text-blue-700 hover:bg-blue-50"
        >
          {hasMorePosts ? "Load More Stories" : "No more stories"}
        </Button>
      </div>
    </div>
  )
}
