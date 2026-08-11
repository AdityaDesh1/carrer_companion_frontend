"use client";

import { CalendarDays, Hash } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { Project } from "@/types/project";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectDetailsProps {
    project: Project;
}

export default function ProjectDetails({
    project,
}: ProjectDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>

                <CardDescription>
                    Project details and metadata
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-sm font-medium text-slate-900">
                        Description
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {project.description || "No description provided."}
                    </p>
                </div>

                <Separator />

                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Created
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(project.createdAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Last Updated
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(project.updatedAt)}
                        </dd>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Hash className="h-3.5 w-3.5" />
                            Project ID
                        </dt>

                        <dd className="break-all font-mono text-sm text-slate-900">
                            {project.id}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
}
