"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    ResumeDetails,
    ResumeDetailsErrorState,
    ResumeDetailsSkeleton,
    ResumeNotFoundState,
} from "@/components/resumes";
import DeleteResumeDialog from "@/components/resumes/delete-resume-dialog";
import { Button } from "@/components/ui/button";
import { useResume } from "@/hooks/resumes/use-resume";

export default function ResumeDetailsPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: resume,
        isLoading,
        isError,
        error,
        refetch,
    } = useResume(id);

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
                    <Link href="/resumes">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Resumes
                    </Link>
                </Button>

                {!isLoading && !isError && resume && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={`/resumes/${resume.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                                Edit Resume
                            </Link>
                        </Button>

                        <DeleteResumeDialog
                            resumeId={resume.id}
                            resumeTitle={resume.title}
                            redirectTo="/resumes"
                        />
                    </div>
                )}
            </div>

            {isLoading && <ResumeDetailsSkeleton />}

            {!isLoading && isNotFound && <ResumeNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ResumeDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && resume && (
                <ResumeDetails resume={resume} />
            )}
        </div>
    );
}
