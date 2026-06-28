import { render, screen, fireEvent } from '@testing-library/react'
import QuizCard from '@/components/QuizCard'
import { getAllWords } from '@/lib/vocab'

const mockWord = getAllWords()[0]
const mockOptions = getAllWords().slice(0, 4)

describe('QuizCard — multiple choice', () => {
  it('renders the question text', () => {
    render(
      <QuizCard
        word={mockWord}
        type="choice"
        options={mockOptions}
        onResult={() => {}}
      />
    )
    expect(screen.getByText(new RegExp(mockWord.german, 'i'))).toBeInTheDocument()
  })

  it('calls onResult(true) when correct option selected', () => {
    const onResult = jest.fn()
    render(
      <QuizCard
        word={mockWord}
        type="choice"
        options={mockOptions}
        onResult={onResult}
      />
    )
    fireEvent.click(screen.getByRole('button', { name: mockWord.english }))
    fireEvent.click(screen.getByRole('button', { name: /check/i }))
    expect(onResult).toHaveBeenCalledWith(true)
  })
})

describe('QuizCard — fill', () => {
  it('renders an input', () => {
    render(
      <QuizCard
        word={mockWord}
        type="fill"
        options={[]}
        onResult={() => {}}
      />
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls onResult(false) on wrong answer', () => {
    const onResult = jest.fn()
    render(
      <QuizCard
        word={mockWord}
        type="fill"
        options={[]}
        onResult={onResult}
      />
    )
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'wrong' } })
    fireEvent.click(screen.getByRole('button', { name: /check/i }))
    expect(onResult).toHaveBeenCalledWith(false)
  })
})
