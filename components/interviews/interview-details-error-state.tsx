"use client";

import { DetailErrorState } from "@/components/navigation";

interface InterviewDetailsErrorStateProps {
    onRetry: () => void;
}

export default function InterviewDetailsErrorState({
    onRetry,
}: InterviewDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load interview"
            description="Something went wrong while fetching this interview."
            onRetry={onRetry}
            backHref="/interviews"
            backLabel="Back to Interviews"
        />
    );
}
