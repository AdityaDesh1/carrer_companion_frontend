import { ResourceDetailsSkeleton } from "@/components/resources";

export default function Loading() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="h-8 w-40 animate-pulse rounded-lg bg-slate-200" />

            <div className="space-y-2">
                <div className="h-9 w-48 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-5 w-72 animate-pulse rounded-lg bg-slate-200" />
            </div>

            <ResourceDetailsSkeleton />
        </div>
    );
}
