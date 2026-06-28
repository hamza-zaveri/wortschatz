import { render, screen, fireEvent } from '@testing-library/react'
import LearnPage from '@/app/learn/[wordId]/page'

jest.mock('next/navigation', () => ({
  useParams: () => ({ wordId: '001' }),
  useRouter: () => ({ push: jest.fn(), back: jest.fn() }),
}))

jest.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => <div {...props}>{children}</div>,
  },
  useReducedMotion: () => false,
}))

Object.defineProperty(window, 'speechSynthesis', {
  value: { speak: jest.fn() },
  writable: true,
})

describe('Learn page', () => {
  beforeEach(() => localStorage.clear())

  it('renders stage 1 with the german word and english translation', () => {
    render(<LearnPage />)
    expect(screen.getByText(/FOOD|GREETINGS|PEOPLE|NUMBERS|DAYS|MONTHS|SEASONS|TIME|COLORS|CLOTHING|BODY|PLACES|TRANSPORT|VERBS|ADJECTIVES|QUESTIONS|OCCUPATIONS|COMMON|DRINKS/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /got it/i })).toBeInTheDocument()
  })

  it('advances to stage 2 after clicking Got it', () => {
    render(<LearnPage />)
    fireEvent.click(screen.getByRole('button', { name: /got it/i }))
    expect(screen.getByRole('button', { name: /listen/i })).toBeInTheDocument()
  })

  it('Next button is always enabled in stage 2', () => {
    render(<LearnPage />)
    fireEvent.click(screen.getByRole('button', { name: /got it/i }))
    const nextBtn = screen.getByRole('button', { name: /next/i })
    expect(nextBtn).not.toBeDisabled()
  })

  it('advances to stage 3 after clicking Next in stage 2', () => {
    render(<LearnPage />)
    fireEvent.click(screen.getByRole('button', { name: /got it/i }))
    fireEvent.click(screen.getByRole('button', { name: /listen/i }))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText(/remember it like this|→/i)).toBeInTheDocument()
  })

  it('shows Check button in stage 4', () => {
    render(<LearnPage />)
    fireEvent.click(screen.getByRole('button', { name: /got it/i }))
    fireEvent.click(screen.getByRole('button', { name: /listen/i }))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    fireEvent.click(screen.getByRole('button', { name: /remember/i }))
    expect(screen.getByRole('button', { name: /check/i })).toBeInTheDocument()
  })
})
