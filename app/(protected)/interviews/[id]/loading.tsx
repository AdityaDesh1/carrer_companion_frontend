import { InterviewDetailsSkeleton } from "@/components/interviews";

export default function Loading() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />
            <InterviewDetailsSkeleton />
        </div>
    );
}
