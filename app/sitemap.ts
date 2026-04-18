import {MetadataRoute} from 'next'
import {allPagesQuery} from '@/sanity/lib/queries'
import {client} from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  const pages = await client.fetch(allPagesQuery)

  const pageUrls: MetadataRoute.Sitemap = pages?.map((page: {slug: string}) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) || []

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pageUrls,
  ]
}
