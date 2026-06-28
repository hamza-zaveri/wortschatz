interface ProgressBarProps {
  value: number
  max: number
  className?: string
}

export default function ProgressBar({ value, max, className }: ProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0
  return (
    <div className={`h-px bg-border ${className ?? ''}`}>
      <div
        className="h-full bg-primary transition-[width] duration-200 ease-linear"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
