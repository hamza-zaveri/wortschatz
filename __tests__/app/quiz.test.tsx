import { render, screen } from '@testing-library/react'
import QuizPage from '@/app/quiz/page'

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }))

describe('Quiz page', () => {
  beforeEach(() => {
    localStorage.clear()
    const ids = Array.from({ length: 15 }, (_, i) =>
      String(i + 1).padStart(3, '0')
    )
    localStorage.setItem('wortschatz:mastered', JSON.stringify(ids))
  })

  it('renders a question', () => {
    render(<QuizPage />)
    expect(screen.getByRole('button', { name: /check/i })).toBeInTheDocument()
  })

  it('shows "No mastered words yet" when nothing mastered', () => {
    localStorage.clear()
    render(<QuizPage />)
    expect(screen.getByText(/no mastered words/i)).toBeInTheDocument()
  })
})
