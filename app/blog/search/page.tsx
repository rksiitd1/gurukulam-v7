"use client"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Share2, Search as SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState, Suspense } from "react"

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={null}>
      <SearchPage />
    </Suspense>
  );
}

function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = (searchParams.get("q") || "");
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update URL as user types
  useEffect(() => {
    if (query.trim()) {
      const timeout = setTimeout(() => {
        router.replace(`/blog/search?q=${encodeURIComponent(query.trim())}`);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // If search is cleared, go back to blog page and focus input
      router.replace('/blog?focus=1');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [query, router]);

  // Keep input in sync if URL changes (e.g., back/forward navigation)
  useEffect(() => {
    if (searchParams.get("q") !== query) {
      setQuery(searchParams.get("q") || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("q")]);

  const filtered = blogPosts
    .filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => b.id - a.id);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-10 mb-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-400 rounded-full blur-xl"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 mb-4 shadow-lg border border-orange-200/50 relative group">
            <SearchIcon className="w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
            Search Results
          </h1>
          <form
            onSubmit={e => e.preventDefault()}
            className="max-w-lg mx-auto mb-5"
            autoComplete="off"
          >
            <div className="relative max-w-2xl mx-auto group">
              {/* Glow effect behind the search bar */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-700" />

              <div className="relative flex items-center bg-white/80 backdrop-blur-xl rounded-full shadow-sm border border-white/50 hover:shadow-md focus-within:shadow-orange-500/10 focus-within:ring-1 focus-within:ring-orange-200 transition-all duration-300 h-12 sm:h-14 overflow-hidden">
                <div className="pl-5 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300">
                  <SearchIcon className="w-5 h-5" />
                </div>

                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="flex-1 h-full border-none bg-transparent px-4 text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                  autoFocus
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="p-2 mr-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <span className="sr-only">Clear search</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                )}

                <div className="pr-2">
                  <button
                    type="submit"
                    className="p-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center gap-3 mb-2">
            {query && (
              <span className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md border border-orange-200/50 backdrop-blur-sm">
                {filtered.length} result{filtered.length !== 1 && "s"} for "{query}"
              </span>
            )}
          </div>
          <p className="text-lg text-gray-600 font-medium">
            {query ? (
              <>
                Showing articles matching <span className="font-semibold text-orange-600 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">"{query}"</span>
              </>
            ) : (
              "Enter a search term to discover inspiring stories."
            )}
          </p>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
      </section>

      {/* Results Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="mb-6">
              <SearchIcon className="w-16 h-16 text-orange-200" />
            </div>
            <div className="text-2xl font-semibold text-gray-400 mb-2">No results found</div>
            <div className="text-gray-500">Try a different search term or check your spelling.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full rounded-none">
                  <div className="relative rounded-none">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={`${post.title} - Search Result Thumbnail`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="space-y-3 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
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
                      <button className="text-gray-400 hover:text-orange-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 