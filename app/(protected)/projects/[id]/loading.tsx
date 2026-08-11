import { ProjectDetailsSkeleton } from "@/components/projects";

export default function Loading() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="h-8 w-40 animate-pulse rounded-lg bg-slate-200" />
            <ProjectDetailsSkeleton />
        </div>
    );
}
