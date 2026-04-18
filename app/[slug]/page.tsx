import {notFound} from 'next/navigation'

import PageBuilderPage from '@/app/components/PageBuilder'
import {getPageQuery, allPagesQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {client} from '@/sanity/lib/client'
import {GetPageQueryResult} from '@/sanity.types'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  const pages = await client.fetch(allPagesQuery)

  return pages?.map((page: {slug: string}) => ({
    slug: page.slug,
  })) || []
}

export default async function Page({params}: Props) {
  const {slug} = await params

  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params: {slug},
  })

  if (!page?._id) {
    notFound()
  }

  return <PageBuilderPage page={page as GetPageQueryResult} />
}
