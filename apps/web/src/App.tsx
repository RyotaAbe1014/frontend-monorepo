import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export function App() {
  return (
    <div className={cn("flex min-h-svh items-center justify-center")}>
      <Button>Click me</Button>
    </div>
  )
}