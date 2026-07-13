"use client";

import { ProjectCard } from "@/components/projects";
import { useProjects } from "@/hooks/projects/use-projects";

export default function ProjectsPage() {
    const {
        data: projects,
        isLoading,
    } = useProjects();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Projects
                </h1>

                <p className="text-slate-500">
                    Manage all your career projects.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects?.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}