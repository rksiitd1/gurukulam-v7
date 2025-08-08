import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold text-orange-600">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Page not found</h1>
        <p className="mt-2 text-base text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. Try going back to the homepage or explore our programs.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/" className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700">
            Go to Home
          </Link>
          <Link href="/programs" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            Explore Programs
          </Link>
        </div>
      </div>
    </main>
  )
}


