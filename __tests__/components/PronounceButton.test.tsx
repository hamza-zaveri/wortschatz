import { render, screen, fireEvent } from '@testing-library/react'
import PronounceButton from '@/components/PronounceButton'

const mockSpeak = jest.fn()

beforeEach(() => {
  mockSpeak.mockClear()
  Object.defineProperty(window, 'speechSynthesis', {
    value: { speak: mockSpeak },
    writable: true,
  })
})

describe('PronounceButton', () => {
  it('renders a listen button', () => {
    render(<PronounceButton word="Apfel" onPlayed={() => {}} />)
    expect(screen.getByRole('button', { name: /listen/i })).toBeInTheDocument()
  })

  it('calls speechSynthesis.speak with correct lang and rate', () => {
    render(<PronounceButton word="Apfel" onPlayed={() => {}} />)
    fireEvent.click(screen.getByRole('button', { name: /listen/i }))
    expect(mockSpeak).toHaveBeenCalledTimes(1)
    const utterance = mockSpeak.mock.calls[0][0] as SpeechSynthesisUtterance
    expect(utterance.text).toBe('Apfel')
    expect(utterance.lang).toBe('de-DE')
    expect(utterance.rate).toBe(0.85)
  })

  it('fires onPlayed callback when clicked', () => {
    const onPlayed = jest.fn()
    render(<PronounceButton word="Apfel" onPlayed={onPlayed} />)
    fireEvent.click(screen.getByRole('button', { name: /listen/i }))
    expect(onPlayed).toHaveBeenCalledTimes(1)
  })
})
