"use client";

import { Project } from "@/types/project";

import {
    Card,
    CardContent,
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
        <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-sm text-slate-500">
                    {project.description || "No description"}
                </p>
            </CardContent>
        </Card>
    );
}