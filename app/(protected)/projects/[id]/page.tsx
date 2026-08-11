"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    ProjectDetails,
    ProjectDetailsErrorState,
    ProjectDetailsSkeleton,
    ProjectNotFoundState,
} from "@/components/projects";
import DeleteProjectDialog from "@/components/projects/delete-project-dialog";
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/projects/use-project";

export default function ProjectDetailsPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: project,
        isLoading,
        isError,
        error,
        refetch,
    } = useProject(id);

    const isNotFound =
        isError &&
        axios.isAxiosError(error) &&
        error.response?.status === 404;

    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    <Link href="/projects">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>

                {!isLoading && !isError && project && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={`/projects/${project.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                                Edit Project
                            </Link>
                        </Button>

                        <DeleteProjectDialog
                            projectId={project.id}
                            projectTitle={project.title}
                            redirectTo="/projects"
                        />
                    </div>
                )}
            </div>

            {isLoading && <ProjectDetailsSkeleton />}

            {!isLoading && isNotFound && <ProjectNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ProjectDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && project && (
                <ProjectDetails project={project} />
            )}
        </div>
    );
}
