"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    InterviewQuestionCard,
    InterviewQuestionCardSkeleton,
    InterviewQuestionsEmptyState,
    InterviewQuestionsErrorState,
} from "@/components/interview-questions";
import { Button } from "@/components/ui/button";
import { useInterviewQuestions } from "@/hooks/interview-questions/use-interview-questions";

const SKELETON_COUNT = 6;

export default function InterviewQuestionsPage() {
    const {
        data: interviewQuestions,
        isLoading,
        isError,
        refetch,
    } = useInterviewQuestions();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Interview Questions</h1>

                    <p className="text-slate-500">
                        Build and manage your interview preparation question
                        bank.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/interview-questions/new">
                        <Plus className="h-4 w-4" />
                        Add Question
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <InterviewQuestionCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <InterviewQuestionsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && interviewQuestions?.length === 0 && (
                <InterviewQuestionsEmptyState />
            )}

            {!isLoading &&
                !isError &&
                interviewQuestions &&
                interviewQuestions.length > 0 && (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {interviewQuestions.map((interviewQuestion) => (
                            <InterviewQuestionCard
                                key={interviewQuestion.id}
                                interviewQuestion={interviewQuestion}
                            />
                        ))}
                    </div>
                )}
        </div>
    );
}
