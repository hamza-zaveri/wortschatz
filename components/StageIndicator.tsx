interface StageIndicatorProps {
  total: number
  current: number
}

export default function StageIndicator({ total, current }: StageIndicatorProps) {
  return (
    <div className="flex items-center gap-1.5" role="group">
      {Array.from({ length: total }, (_, i) => {
        const done = i < current
        return (
          <div
            key={i}
            aria-label={done ? 'completed' : 'pending'}
            className={`w-1.5 h-1.5 rounded-full ${done ? 'bg-primary' : 'bg-border'}`}
          />
        )
      })}
    </div>
  )
}
