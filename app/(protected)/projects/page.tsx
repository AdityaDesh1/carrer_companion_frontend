"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    ProjectCard,
    ProjectCardSkeleton,
    ProjectsEmptyState,
    ProjectsErrorState,
} from "@/components/projects";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/projects/use-projects";

const SKELETON_COUNT = 6;

export default function ProjectsPage() {
    const {
        data: projects,
        isLoading,
        isError,
        refetch,
    } = useProjects();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Projects</h1>

                    <p className="text-slate-500">
                        Manage all your career projects.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/projects/new">
                        <Plus className="h-4 w-4" />
                        New Project
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <ProjectsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && projects?.length === 0 && (
                <ProjectsEmptyState />
            )}

            {!isLoading && !isError && projects && projects.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
