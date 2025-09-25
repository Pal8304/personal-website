import Link from "next/link"
export default function BlogHeader() {
    return (
        <div className="flex w-2/3 p-2">
        <Link href="/blog" className="text-2xl ">
          Blog List
        </Link>
        <Link href="/" className="text-lg ml-auto">
          Back to Portfolio
        </Link>
      </div>
    )
}