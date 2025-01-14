import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="mb-4">Could not find the requested blog post.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        Return to Blog
      </Link>
    </div>
  )
}

