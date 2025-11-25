import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, PT_Serif } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pranavkarra.me'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Pranav Karra',
    template: '%s | Pranav Karra',
  },
  description:
    'Third year Penn State CS major interested in AI interpretability and alignment research. Founding Engineer, President of ML@PSU, and researcher at PSU NLP Lab.',
  keywords: [
    'Pranav Karra',
    'AI Interpretability',
    'Machine Learning',
    'Penn State',
    'NLP Research',
    'ML@PSU',
    'RAG',
    'Computer Vision',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Pranav Karra', url: 'https://pranavkarra.me' }],
  creator: 'Pranav Karra',
  publisher: 'Pranav Karra',
  openGraph: {
    type: 'profile',
    firstName: 'Pranav',
    lastName: 'Karra',
    username: 'pranav__karra',
    url: 'https://pranavkarra.me',
    siteName: 'Pranav Karra',
    title: 'Pranav Karra',
    description:
      'Penn State CS major interested in AI interpretability. Founding Engineer, ML club president, and NLP researcher.',
    images: [
      {
        url: '/pranav.png',
        width: 400,
        height: 400,
        alt: 'Pranav Karra',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Pranav Karra',
    description:
      'Penn State CS major | AI Interpretability | Founding Engineer',
    creator: '@pranav__karra',
    images: ['/pranav.png'],
  },
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://pranavkarra.me/#person',
      name: 'Pranav Karra',
      givenName: 'Pranav',
      familyName: 'Karra',
      url: 'https://pranavkarra.me',
      image: 'https://pranavkarra.me/pranav.png',
      jobTitle: 'Founding Engineer',
      email: 'pranavkarra@psu.edu',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Pennsylvania State University',
        sameAs: 'https://www.psu.edu',
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Machine Learning @ Penn State',
        url: 'https://www.mlpsu.org/',
        roleName: 'President',
      },
      knowsAbout: [
        'AI Interpretability',
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'RAG Systems',
        'Full Stack Development',
        'Rust',
        'Python',
        'TypeScript',
      ],
      sameAs: [
        'https://github.com/Pranav-Karra-3301',
        'https://x.com/pranav__karra',
        'https://www.linkedin.com/in/pranav-karra-09477228b/',
        'https://instagram.com/pranav.karra',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pranavkarra.me/#website',
      url: 'https://pranavkarra.me',
      name: 'Pranav Karra',
      description:
        'Personal portfolio of Pranav Karra - Penn State CS major, AI researcher, and engineer',
      author: {
        '@id': 'https://pranavkarra.me/#person',
      },
      publisher: {
        '@id': 'https://pranavkarra.me/#person',
      },
    },
  ],
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const ptSerif = PT_Serif({
  variable: '--font-pt-serif',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${ptSerif.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
