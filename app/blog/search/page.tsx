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
    <main className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 mb-8 shadow-inner ring-1 ring-orange-200/50">
            <SearchIcon className="w-8 h-8 text-orange-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Results</span>
          </h1>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of stories, updates, and insights from the mission.
          </p>

          <form
            onSubmit={e => e.preventDefault()}
            className="max-w-2xl mx-auto relative z-10"
            autoComplete="off"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-orange-900/5 ring-1 ring-black/5 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-orange-900/10">
                <div className="pl-6 text-gray-400">
                  <SearchIcon className="w-6 h-6" />
                </div>
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for articles, topics, or keywords..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="flex-1 h-16 px-4 text-lg bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 text-gray-900"
                  autoFocus
                />
                <div className="pr-2">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25">
                    <span className="text-sm font-bold">Go</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
        {query && (
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Found <span className="font-semibold text-gray-900">{filtered.length}</span> results for "<span className="text-orange-600 font-medium">{query}</span>"
            </p>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-12 text-center border border-gray-100">
            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon className="w-10 h-10 text-orange-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any articles matching your search. Try using different keywords or check for spelling errors.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="h-full bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-orange-900/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                      <span className="text-sm font-medium text-orange-600 flex items-center group/link">
                        Read Article
                        <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <button className="text-gray-400 hover:text-orange-600 transition-colors p-2 hover:bg-orange-50 rounded-full">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 