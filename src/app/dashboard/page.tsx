import { DashboardShell } from "@/components/layout";
import { PageHeader } from "@/components/ui";
import { ExampleList } from "@/features/example/components/example-list";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Dashboard shell"
        title="A replaceable admin foundation"
        description="Use this route as a starting point for private product areas. Auth is intentionally abstracted so you can wire NextAuth, Clerk, Supabase, or a custom provider."
      />
      <div className="mt-8">
        <ExampleList />
      </div>
    </DashboardShell>
  );
}
