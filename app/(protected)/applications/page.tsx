"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    ApplicationCard,
    ApplicationCardSkeleton,
    ApplicationsEmptyState,
    ApplicationsErrorState,
} from "@/components/applications";
import { Button } from "@/components/ui/button";
import { useApplications } from "@/hooks/applications/use-applications";

const SKELETON_COUNT = 6;

export default function ApplicationsPage() {
    const {
        data: applications,
        isLoading,
        isError,
        refetch,
    } = useApplications();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Applications</h1>

                    <p className="text-slate-500">
                        Track and manage your job applications.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/applications/new">
                        <Plus className="h-4 w-4" />
                        Add Application
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <ApplicationCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <ApplicationsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && applications?.length === 0 && (
                <ApplicationsEmptyState />
            )}

            {!isLoading && !isError && applications && applications.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {applications.map((application) => (
                        <ApplicationCard
                            key={application.id}
                            application={application}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
