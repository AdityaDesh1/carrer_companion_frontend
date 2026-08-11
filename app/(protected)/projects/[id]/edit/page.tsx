"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import ProjectForm from "@/components/projects/project-form";
import {
    ProjectDetailsErrorState,
    ProjectDetailsSkeleton,
    ProjectNotFoundState,
} from "@/components/projects";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/projects/use-project";

export default function EditProjectPage() {
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
            <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
            >
                <Link href={`/projects/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Project
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Project</h1>

                <p className="text-slate-500">
                    Update your project title and description.
                </p>
            </div>

            {isLoading && <ProjectDetailsSkeleton />}

            {!isLoading && isNotFound && <ProjectNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ProjectDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && project && (
                <Card>
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>

                        <CardDescription>
                            Make changes to your project information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ProjectForm
                            mode="edit"
                            projectId={project.id}
                            defaultValues={{
                                title: project.title,
                                description: project.description ?? "",
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
