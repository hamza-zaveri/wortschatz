import { render } from '@testing-library/react'
import StageIndicator from '@/components/StageIndicator'

describe('StageIndicator', () => {
  it('renders the correct number of dots', () => {
    const { container } = render(<StageIndicator total={4} current={2} />)
    expect(container.querySelectorAll('[aria-label]').length).toBe(4)
  })

  it('marks completed dots correctly', () => {
    const { container } = render(<StageIndicator total={4} current={2} />)
    const dots = container.querySelectorAll('[aria-label]')
    expect(dots[0].getAttribute('aria-label')).toBe('completed')
    expect(dots[1].getAttribute('aria-label')).toBe('completed')
    expect(dots[2].getAttribute('aria-label')).toBe('pending')
    expect(dots[3].getAttribute('aria-label')).toBe('pending')
  })
})
