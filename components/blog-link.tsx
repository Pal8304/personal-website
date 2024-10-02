import Link from "next/link"

import { BlogLinkProps } from "@/data/types"

export default function BlogLink({blogtitle,blogurl,blogdate} : BlogLinkProps){
    return (
        <Link href={blogurl} className="flex flex-col">
            <div className="text-lg opacity-50">
                {blogdate}
            </div>
            <div className="text-2xl transition duration-500 ease-in-out hover:underline">
                {blogtitle}
            </div>
        </Link>
    )
}