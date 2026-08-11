"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    DeleteInterviewDialog,
    InterviewDetails,
    InterviewDetailsErrorState,
    InterviewDetailsSkeleton,
    InterviewNotFoundState,
} from "@/components/interviews";
import { Button } from "@/components/ui/button";
import { useInterview } from "@/hooks/interviews/use-interview";

export default function InterviewDetailsPage() {
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    <Link href="/interviews">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Interviews
                    </Link>
                </Button>

                {!isLoading && !isError && interview && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={`/interviews/${interview.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                                Edit Interview
                            </Link>
                        </Button>

                        <DeleteInterviewDialog
                            interviewId={interview.id}
                            company={interview.company}
                            role={interview.role}
                            round={interview.round}
                            redirectTo="/interviews"
                        />
                    </div>
                )}
            </div>

            {isLoading && <InterviewDetailsSkeleton />}

            {!isLoading && isNotFound && <InterviewNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <InterviewDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && interview && (
                <InterviewDetails interview={interview} />
            )}
        </div>
    );
}
