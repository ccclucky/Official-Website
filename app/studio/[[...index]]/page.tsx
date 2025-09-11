import dynamic from "next/dynamic";

// Ensures the Studio route is statically generated
// export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
// export { metadata, viewport } from 'next-sanity/studio'

const Studio = dynamic(() => import('./Studio'), { ssr: false })

export default function StudioPage() {
  return <Studio />
}
