import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import type { Metadata } from 'next'

const BASE_URL = 'https://wortschatz-green.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Wortschatz — Free German A1 Vocabulary',
    template: '%s | Wortschatz',
  },
  description:
    'Learn German A1 vocabulary for free. 227 words with articles, pronunciation, mnemonics, and quizzes — perfect for Goethe A1 exam prep and complete beginners.',
  keywords: [
    'learn German vocabulary',
    'German A1 vocabulary',
    'German words for beginners',
    'Deutsch lernen',
    'A1 German',
    'German vocabulary trainer',
    'learn German online free',
    'German vocabulary practice',
    'German nouns with articles',
    'Goethe A1 vocabulary',
    'German articles der die das',
    'free German app',
  ],
  authors: [{ name: 'Wortschatz' }],
  creator: 'Wortschatz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Wortschatz',
    title: 'Wortschatz — Free German A1 Vocabulary',
    description:
      'Learn 227 German A1 words with mnemonics, pronunciation, and quizzes. Free forever.',
  },
  twitter: {
    card: 'summary',
    title: 'Wortschatz — Free German A1 Vocabulary',
    description:
      'Learn 227 German A1 words with mnemonics, pronunciation, and quizzes. Free forever.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="https://buymeacoffee.com/coolant"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#FFFBEB] border-b border-[#FDE68A] text-[12px] font-medium text-[#92400E] hover:bg-[#FEF3C7] transition-colors duration-200"
        >
          <span>☕</span>
          <span>Wortschatz is free — if it&apos;s helped you, a coffee keeps it running. I&apos;d be really grateful.</span>
          <span className="underline underline-offset-2 ml-1">Buy me a coffee →</span>
        </a>
        {children}
      </body>
    </html>
  )
}
