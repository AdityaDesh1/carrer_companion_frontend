"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    ResourceCard,
    ResourceCardSkeleton,
    ResourcesEmptyState,
    ResourcesErrorState,
} from "@/components/resources";
import { Button } from "@/components/ui/button";
import { useResources } from "@/hooks/resources/use-resources";

const SKELETON_COUNT = 6;

export default function ResourcesPage() {
    const {
        data: resources,
        isLoading,
        isError,
        refetch,
    } = useResources();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Resources</h1>

                    <p className="text-slate-500">
                        Save and manage useful career resources.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/resources/new">
                        <Plus className="h-4 w-4" />
                        Add Resource
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <ResourceCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <ResourcesErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && resources?.length === 0 && (
                <ResourcesEmptyState />
            )}

            {!isLoading && !isError && resources && resources.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {resources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            )}
        </div>
    );
}
