'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getAllWords, getCategories, type Word } from '@/lib/vocab'
import ProgressBar from '@/components/ProgressBar'

export default function Home() {
  const [words] = useState<Word[]>(getAllWords)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = ['all', ...getCategories()]
  const filtered =
    activeCategory === 'all' ? words : words.filter(w => w.category === activeCategory)
  const masteredCount = words.filter(w => w.mastered).length
  const total = words.length
  const hasMastered = masteredCount > 0

  return (
    <main className="max-w-content mx-auto px-6 py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-mono text-[32px] font-light tracking-tight text-primary">
            Wortschatz
          </h1>
          <p className="mt-1 text-[13px] text-muted tracking-wide">A1 German vocabulary</p>
        </div>
        <Link
          href="/quiz"
          aria-disabled={!hasMastered}
          onClick={e => { if (!hasMastered) e.preventDefault() }}
          className={`mt-1 min-h-[44px] px-5 flex items-center text-[13px] font-medium uppercase tracking-[0.1em] border transition-colors duration-200 ${
            hasMastered
              ? 'border-primary text-primary hover:bg-highlight'
              : 'border-border text-muted cursor-not-allowed'
          }`}
        >
          Quiz
        </Link>
      </div>

      <div className="my-6 h-px bg-border" />

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] border transition-colors duration-200 min-h-[44px] ${
              activeCategory === cat
                ? 'border-primary text-primary'
                : 'border-border text-muted hover:border-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-[13px] text-muted mb-2">
          {masteredCount} / {total} mastered
        </p>
        <ProgressBar value={masteredCount} max={total} />
      </div>

      <ul className="divide-y divide-border">
        {filtered.map(word => (
          <li key={word.id}>
            <Link
              href={`/learn/${word.id}`}
              className="flex items-center justify-between py-3 hover:opacity-70 transition-opacity duration-200"
            >
              <span className="font-mono text-primary">{word.german}</span>
              <span className="flex items-center gap-3 text-muted">
                <span className="text-sm">{word.english}</span>
                {word.mastered && (
                  <span className="text-[11px] font-medium text-correct" aria-label="mastered">
                    ✓
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>

    </main>
  )
}
