import { InterviewQuestionCardSkeleton } from "@/components/interview-questions";

const SKELETON_COUNT = 6;

export default function Loading() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="h-9 w-56 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-5 w-80 animate-pulse rounded-lg bg-slate-200" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <InterviewQuestionCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}
