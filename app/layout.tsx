import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ekkos.ca'),
  title: {
    default: 'Ekkos Technologies Inc. — AI Memory Infrastructure',
    template: '%s | Ekkos Technologies',
  },
  description: 'The cognitive substrate and memory infrastructure for agents, robotics, apps, and enterprise AI systems. Event-sourced memory, episodic segmentation, pattern intelligence.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://ekkos.ca/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Ekkos Technologies Inc. — AI Memory Infrastructure',
    description: 'The cognitive substrate and memory infrastructure for intelligent systems.',
    url: 'https://ekkos.ca/',
    type: 'website',
    siteName: 'Ekkos Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekkos Technologies Inc.',
    description: 'AI memory infrastructure for agents, robotics, and enterprise systems.',
    creator: '@ekkosdev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ekkos Technologies Inc.',
              url: 'https://ekkos.ca',
              logo: 'https://ekkos.ca/favicon.svg',
              description: 'Canadian AI company building the cognitive substrate and memory infrastructure for intelligent systems.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CA',
              },
              sameAs: [
                'https://ekkos.dev',
                'https://github.com/Ekkos-Technologies-Inc',
                'https://twitter.com/ekkosdev',
                'https://linkedin.com/company/ekkos',
              ],
            }),
          }}
        />
        <div className="scanline-overlay" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
