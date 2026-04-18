import {
  PortableText as PortableTextReact,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity'

import ResolvedLink from '@/app/components/ResolvedLink'
import {DereferencedLink} from '@/sanity/lib/types'

export const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({children, value}) => {
      const link = value as DereferencedLink
      return (
        <ResolvedLink
          link={link}
          className="underline transition hover:opacity-80"
        >
          {children}
        </ResolvedLink>
      )
    },
  },
}

export default function PortableText({
  value,
  className = '',
}: {
  value: PortableTextBlock[]
  className?: string
}) {
  return (
    <div className={`prose max-w-none ${className}`}>
      <PortableTextReact value={value} components={portableTextComponents} />
    </div>
  )
}
