import { cn } from "@workspace/ui/lib/utils"

export function PageHeader({
  title,
  description,
  className,
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <header className={cn("border-b pb-4", className)}>
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {description && (
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      )}
    </header>
  )
}