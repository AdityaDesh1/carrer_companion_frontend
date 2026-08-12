"use client";

import { DetailErrorState } from "@/components/navigation";

interface NoteDetailsErrorStateProps {
    onRetry: () => void;
}

export default function NoteDetailsErrorState({
    onRetry,
}: NoteDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load note"
            description="Something went wrong while fetching this note."
            onRetry={onRetry}
            backHref="/notes"
            backLabel="Back to Notes"
        />
    );
}
