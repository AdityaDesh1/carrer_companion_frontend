"use client";

import { DetailErrorState } from "@/components/navigation";

interface ApplicationDetailsErrorStateProps {
    onRetry: () => void;
}

export default function ApplicationDetailsErrorState({
    onRetry,
}: ApplicationDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load application"
            description="Something went wrong while fetching this application."
            onRetry={onRetry}
            backHref="/applications"
            backLabel="Back to Applications"
        />
    );
}
