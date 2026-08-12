"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    ResumeCard,
    ResumeCardSkeleton,
    ResumesEmptyState,
    ResumesErrorState,
} from "@/components/resumes";
import { Button } from "@/components/ui/button";
import { useResumes } from "@/hooks/resumes/use-resumes";

const SKELETON_COUNT = 6;

export default function ResumesPage() {
    const {
        data: resumes,
        isLoading,
        isError,
        refetch,
    } = useResumes();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Resumes</h1>

                    <p className="text-slate-500">
                        Manage your saved resumes and career profile summaries.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/resumes/new">
                        <Plus className="h-4 w-4" />
                        Add Resume
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <ResumeCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <ResumesErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && resumes?.length === 0 && (
                <ResumesEmptyState />
            )}

            {!isLoading && !isError && resumes && resumes.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {resumes.map((resume) => (
                        <ResumeCard key={resume.id} resume={resume} />
                    ))}
                </div>
            )}
        </div>
    );
}
