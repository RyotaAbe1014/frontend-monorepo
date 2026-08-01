import { Button } from "@workspace/ui/components/button"
import { PageHeader } from "@workspace/ui/components/page-header"

export function App() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 p-8">
      <PageHeader
        title="Design System"
        description="packages/ui のコンポーネントカタログ"
      />

      <section className="space-y-3">
        <h2 className="text-sm font-medium">Button</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
    </div>
  )
}