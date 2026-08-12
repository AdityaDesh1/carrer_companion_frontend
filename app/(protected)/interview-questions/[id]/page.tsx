"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    InterviewQuestionDetails,
    InterviewQuestionDetailsErrorState,
    InterviewQuestionDetailsSkeleton,
    InterviewQuestionNotFoundState,
} from "@/components/interview-questions";
import DeleteInterviewQuestionDialog from "@/components/interview-questions/delete-interview-question-dialog";
import { Button } from "@/components/ui/button";
import { useInterviewQuestion } from "@/hooks/interview-questions/use-interview-question";

export default function InterviewQuestionDetailsPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: interviewQuestion,
        isLoading,
        isError,
        error,
        refetch,
    } = useInterviewQuestion(id);

    const isNotFound =
        isError &&
        axios.isAxiosError(error) &&
        error.response?.status === 404;

    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    <Link href="/interview-questions">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Questions
                    </Link>
                </Button>

                {!isLoading && !isError && interviewQuestion && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link
                                href={`/interview-questions/${interviewQuestion.id}/edit`}
                            >
                                <Pencil className="h-4 w-4" />
                                Edit Question
                            </Link>
                        </Button>

                        <DeleteInterviewQuestionDialog
                            interviewQuestionId={interviewQuestion.id}
                            questionText={interviewQuestion.question}
                            redirectTo="/interview-questions"
                        />
                    </div>
                )}
            </div>

            {isLoading && <InterviewQuestionDetailsSkeleton />}

            {!isLoading && isNotFound && (
                <InterviewQuestionNotFoundState />
            )}

            {!isLoading && isError && !isNotFound && (
                <InterviewQuestionDetailsErrorState
                    onRetry={() => refetch()}
                />
            )}

            {!isLoading && !isError && interviewQuestion && (
                <InterviewQuestionDetails
                    interviewQuestion={interviewQuestion}
                />
            )}
        </div>
    );
}
