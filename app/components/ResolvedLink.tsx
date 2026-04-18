'use client'

import Link from 'next/link'
import {Link as SanityLink} from '@/sanity.types'
import {linkResolver} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'

type ResolvedLinkProps = {
  link: SanityLink | DereferencedLink | undefined
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function ResolvedLink({link, children, className = '', style}: ResolvedLinkProps) {
  const href = linkResolver(link)

  if (!href) {
    return <span className={className} style={style}>{children}</span>
  }

  const isExternal = href.startsWith('http') || href.startsWith('//')
  const openInNewTab = link?.openInNewTab || isExternal

  if (openInNewTab) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  )
}
