"use client";

import { DetailErrorState } from "@/components/navigation";

interface InterviewQuestionDetailsErrorStateProps {
    onRetry: () => void;
}

export default function InterviewQuestionDetailsErrorState({
    onRetry,
}: InterviewQuestionDetailsErrorStateProps) {
    return (
        <DetailErrorState
            title="Unable to load question"
            description="Something went wrong while fetching this interview question."
            onRetry={onRetry}
            backHref="/interview-questions"
            backLabel="Back to Interview Questions"
        />
    );
}
