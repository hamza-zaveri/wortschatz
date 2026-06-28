import { render } from '@testing-library/react'
import ProgressBar from '@/components/ProgressBar'

describe('ProgressBar', () => {
  it('renders inner bar at correct width percentage', () => {
    const { container } = render(<ProgressBar value={3} max={10} />)
    const inner = container.querySelector('[style]') as HTMLElement
    expect(inner.style.width).toBe('30%')
  })

  it('clamps to 0% when value is 0', () => {
    const { container } = render(<ProgressBar value={0} max={10} />)
    const inner = container.querySelector('[style]') as HTMLElement
    expect(inner.style.width).toBe('0%')
  })

  it('clamps to 100% when value equals max', () => {
    const { container } = render(<ProgressBar value={10} max={10} />)
    const inner = container.querySelector('[style]') as HTMLElement
    expect(inner.style.width).toBe('100%')
  })
})
