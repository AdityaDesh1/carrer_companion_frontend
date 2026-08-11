"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    InterviewCard,
    InterviewCardSkeleton,
    InterviewsEmptyState,
    InterviewsErrorState,
} from "@/components/interviews";
import { Button } from "@/components/ui/button";
import { useInterviews } from "@/hooks/interviews/use-interviews";

const SKELETON_COUNT = 6;

export default function InterviewsPage() {
    const {
        data: interviews,
        isLoading,
        isError,
        refetch,
    } = useInterviews();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Interviews</h1>

                    <p className="text-slate-500">
                        Track and manage your upcoming and completed interviews.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/interviews/new">
                        <Plus className="h-4 w-4" />
                        Add Interview
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <InterviewCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <InterviewsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && interviews?.length === 0 && (
                <InterviewsEmptyState />
            )}

            {!isLoading && !isError && interviews && interviews.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {interviews.map((interview) => (
                        <InterviewCard key={interview.id} interview={interview} />
                    ))}
                </div>
            )}
        </div>
    );
}
