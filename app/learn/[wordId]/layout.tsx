import type { Metadata } from 'next'
import rawWords from '@/data/vocabulary.json'

interface Props {
  params: Promise<{ wordId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { wordId } = await params
  const word = (rawWords as { id: string; german: string; english: string; trick: string; category: string }[])
    .find(w => w.id === wordId)

  if (!word) return { title: 'Word not found' }

  return {
    title: `${word.german} — ${word.english}`,
    description: `Learn the German ${word.category} word "${word.german}" (${word.english}). ${word.trick}`,
    openGraph: {
      title: `${word.german} — ${word.english} | Wortschatz`,
      description: `Learn the German word "${word.german}" (${word.english}) with a mnemonic tip.`,
    },
  }
}

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
