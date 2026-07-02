import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wortschatz — A1 German Vocabulary',
  description: 'Learn German A1 vocabulary with mnemonics and spaced practice',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="https://buymeacoffee.com/coolant"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-highlight border-b border-border text-[12px] text-muted hover:text-primary transition-colors duration-200"
        >
          <span>☕</span>
          <span>Wortschatz is free — if it&apos;s helped you, a coffee keeps it running. I&apos;d be really grateful.</span>
        </a>
        {children}
      </body>
    </html>
  )
}
