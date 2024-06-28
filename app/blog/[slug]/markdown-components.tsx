import Link from 'next/link'
import Image from 'next/image'
import { MDXComponents } from 'mdx/types'
import CodeTabs from '@/components/code-tabs'
import { Code } from 'bright'
Code.lineNumbers = true
Code.theme = 'dracula'

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    )
  },
//   img: ({ children, ...props }) => {
//     // You need to do some work here to get the width and height of the image.
//     // See the details below for my solution.
//     return <Image {...props} />
//   },
  pre: Code,
  CodeTabs: CodeTabs,
  // any other components you want to use in your markdown
}