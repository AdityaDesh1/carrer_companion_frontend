"use client";

import { DetailErrorState } from "@/components/navigation";

interface ResumeDetailsErrorStateProps {
    onRetry: () => void;
}

export default function ResumeDetailsErrorState({
    onRetry,
}: ResumeDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load resume"
            description="Something went wrong while fetching this resume."
            onRetry={onRetry}
            backHref="/resumes"
            backLabel="Back to Resumes"
        />
    );
}
