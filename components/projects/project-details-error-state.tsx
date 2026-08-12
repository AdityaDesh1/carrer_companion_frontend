"use client";

import { DetailErrorState } from "@/components/navigation";

interface ProjectDetailsErrorStateProps {
    onRetry: () => void;
}

export default function ProjectDetailsErrorState({
    onRetry,
}: ProjectDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load project"
            description="Something went wrong while fetching this project."
            onRetry={onRetry}
            backHref="/projects"
            backLabel="Back to Projects"
        />
    );
}
