import { render, screen } from '@testing-library/react'
import WordCard from '@/components/WordCard'

describe('WordCard', () => {
  it('renders children', () => {
    render(<WordCard stage={1}><p>hello</p></WordCard>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('applies the highlight background', () => {
    const { container } = render(<WordCard stage={1}><p>x</p></WordCard>)
    expect(container.firstChild).toHaveClass('bg-highlight')
  })
})
