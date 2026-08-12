"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import {
    InterviewQuestionDetailsErrorState,
    InterviewQuestionDetailsSkeleton,
    InterviewQuestionForm,
    InterviewQuestionNotFoundState,
} from "@/components/interview-questions";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInterviewQuestion } from "@/hooks/interview-questions/use-interview-question";

export default function EditInterviewQuestionPage() {
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
            <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
            >
                <Link href={`/interview-questions/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Question
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Question</h1>

                <p className="text-slate-500">
                    Update your interview question details.
                </p>
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
                <Card>
                    <CardHeader>
                        <CardTitle>Question Details</CardTitle>

                        <CardDescription>
                            Make changes to your interview question.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <InterviewQuestionForm
                            mode="edit"
                            interviewQuestionId={interviewQuestion.id}
                            defaultValues={{
                                question: interviewQuestion.question,
                                answer: interviewQuestion.answer ?? "",
                                topic: interviewQuestion.topic,
                                difficulty: interviewQuestion.difficulty,
                                company: interviewQuestion.company ?? "",
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
