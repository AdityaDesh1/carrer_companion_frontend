"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import {
    InterviewDetailsErrorState,
    InterviewDetailsSkeleton,
    InterviewForm,
    InterviewNotFoundState,
} from "@/components/interviews";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInterview } from "@/hooks/interviews/use-interview";
import { toDatetimeLocalValue } from "@/lib/format-datetime";

export default function EditInterviewPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: interview,
        isLoading,
        isError,
        error,
        refetch,
    } = useInterview(id);

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
                <Link href={`/interviews/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Interview
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Interview</h1>

                <p className="text-slate-500">
                    Update your interview details, status, and feedback.
                </p>
            </div>

            {isLoading && <InterviewDetailsSkeleton />}

            {!isLoading && isNotFound && <InterviewNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <InterviewDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && interview && (
                <Card>
                    <CardHeader>
                        <CardTitle>Interview Details</CardTitle>

                        <CardDescription>
                            Make changes to your interview information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <InterviewForm
                            mode="edit"
                            interviewId={interview.id}
                            defaultValues={{
                                company: interview.company,
                                role: interview.role,
                                round: interview.round,
                                scheduledAt: toDatetimeLocalValue(
                                    interview.scheduledAt
                                ),
                                status: interview.status,
                                notes: interview.notes ?? "",
                                feedback: interview.feedback ?? "",
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
