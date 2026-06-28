'use client'

interface PronounceButtonProps {
  word: string
  onPlayed: () => void
}

export default function PronounceButton({ word, onPlayed }: PronounceButtonProps) {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'de-DE'
    utterance.rate = 0.85
    window.speechSynthesis.speak(utterance)
    onPlayed()
  }

  return (
    <button
      onClick={speak}
      className="flex items-center gap-2 min-h-[44px] px-5 border border-border text-primary text-sm font-medium tracking-wide hover:border-primary transition-colors duration-200"
    >
      ▶ Listen
    </button>
  )
}
