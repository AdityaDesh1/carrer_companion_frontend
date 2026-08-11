"use client";

import Link from "next/link";
import { CalendarDays, Eye, Pencil } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { Project } from "@/types/project";

import DeleteProjectDialog from "@/components/projects/delete-project-dialog";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader>
                <CardTitle className="line-clamp-2">
                    <Link
                        href={`/projects/${project.id}`}
                        className="transition-colors hover:text-primary"
                    >
                        {project.title}
                    </Link>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <CardDescription className="line-clamp-3 text-sm">
                    {project.description || "No description provided."}
                </CardDescription>

                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />

                    <span>Created {formatDate(project.createdAt)}</span>
                </div>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                    <Link href={`/projects/${project.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>

                <Button asChild variant="outline" size="sm">
                    <Link href={`/projects/${project.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                        Edit
                    </Link>
                </Button>

                <DeleteProjectDialog
                    projectId={project.id}
                    projectTitle={project.title}
                    size="sm"
                    className="sm:w-auto"
                />
            </CardFooter>
        </Card>
    );
}
