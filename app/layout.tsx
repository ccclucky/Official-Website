import './globals.css'
import './clerk.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | CCLUCKY BLOG',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'cclucky,开发者,思考者,探索者,幸运的人',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | CCLUCKY BLOG',
    },
    description: seo.description,
    siteName: 'CCLUCKY BLOG',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://www.cclucky.eu.org',
  },
  twitter: {
    site: '@cclucky',
    creator: '@cclucky',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Person',
                  name: 'cclucky',
                  url: 'https://cclucky.eu.org',
                  logo: 'https://cclucky.eu.org/icon.png',
                  sameAs: [
                    'https://github.com/ccclucky',
                    'https://twitter.com/cclucky',
                    'https://t.me/cc_l_u_c_k_y',
                  ],
                }),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'WebSite',
                  name: 'CCLUCKY BLOG',
                  url: 'https://cclucky.eu.org',
                }),
              }}
            />
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-X3L2REZD60" />
        <Analytics />
      </html>
    </ClerkProvider>
  )
}
