import type { MetadataRoute } from 'next'
import rawWords from '@/data/vocabulary.json'

const BASE_URL = 'https://wortschatz-green.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const wordPages = (rawWords as { id: string }[]).map(word => ({
    url: `${BASE_URL}/learn/${word.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...wordPages,
  ]
}
