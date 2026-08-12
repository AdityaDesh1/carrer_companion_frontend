"use client";

import { DetailErrorState } from "@/components/navigation";

interface ResourceDetailsErrorStateProps {
    onRetry: () => void;
}

export default function ResourceDetailsErrorState({
    onRetry,
}: ResourceDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load resource"
            description="Something went wrong while fetching this resource."
            onRetry={onRetry}
            backHref="/resources"
            backLabel="Back to Resources"
        />
    );
}
