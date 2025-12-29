import { type MetadataRoute } from 'next'

import { url } from '~/lib'
import { getPostsForSitemap } from '~/sanity/queries'

export default async function sitemap() {
  const staticMap = [
    {
      url: url('/').href,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: url('/blog').href,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: url('/projects').href,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: url('/guestbook').href,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ] satisfies MetadataRoute.Sitemap

  const posts = await getPostsForSitemap()
  const dynamicMap = posts
    ? posts.map((post) => ({
        url: url(`/blog/${post.slug}`).href,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.8,
      }))
    : []

  return [...staticMap, ...dynamicMap]
}

export const runtime = 'edge'
export const revalidate = 60
