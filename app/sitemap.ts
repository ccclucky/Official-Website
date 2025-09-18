import { type MetadataRoute } from 'next'

import { url } from '~/lib'
import { getPostsForSitemap } from '~/sanity/queries'

export default async function sitemap() {
  const staticMap = [
    {
      url: url('/').href,
      lastModified: new Date(),
    },
    {
      url: url('/blog').href,
      lastModified: new Date(),
    },
    {
      url: url('/projects').href,
      lastModified: new Date(),
    },
    {
      url: url('/guestbook').href,
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap

  const posts = await getPostsForSitemap()
  const dynamicMap = posts
    ? posts.map((post) => ({
        url: url(`/blog/${post.slug}`).href,
        lastModified: new Date(post.publishedAt),
      }))
    : []

  return [...staticMap, ...dynamicMap]
}

export const runtime = 'edge'
export const revalidate = 60
