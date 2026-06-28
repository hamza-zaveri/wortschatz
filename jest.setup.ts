import '@testing-library/jest-dom'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value },
    removeItem: (key: string) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

class MockSpeechSynthesisUtterance {
  text: string; lang = ''; rate = 1; pitch = 1; volume = 1
  constructor(text: string) { this.text = text }
}
Object.defineProperty(window, 'SpeechSynthesisUtterance', { value: MockSpeechSynthesisUtterance, writable: true })
