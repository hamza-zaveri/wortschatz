interface WordCardProps {
  stage: number
  children: React.ReactNode
}

export default function WordCard({ children }: WordCardProps) {
  return (
    <div className="bg-highlight border border-border p-6">
      {children}
    </div>
  )
}
