import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }))

describe('Home page', () => {
  beforeEach(() => localStorage.clear())

  it('renders the Wortschatz heading', () => {
    render(<Home />)
    expect(screen.getByText('Wortschatz')).toBeInTheDocument()
  })

  it('renders an All category filter pill', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
  })

  it('renders word rows with german and english text', () => {
    render(<Home />)
    const rows = screen.getAllByRole('link')
    expect(rows.length).toBeGreaterThan(10)
  })

  it('filters words when a category pill is clicked', () => {
    render(<Home />)
    const allLinks = screen.getAllByRole('link').length
    const foodPill = screen.getByRole('button', { name: /food/i })
    fireEvent.click(foodPill)
    const filteredLinks = screen.getAllByRole('link').length
    expect(filteredLinks).toBeLessThan(allLinks)
  })

  it('Quiz button is disabled when nothing is mastered', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /quiz/i })).toHaveAttribute('aria-disabled', 'true')
  })

  it('shows mastery count', () => {
    render(<Home />)
    expect(screen.getByText(/mastered/i)).toBeInTheDocument()
  })
})
