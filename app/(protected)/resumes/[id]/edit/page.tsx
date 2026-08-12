"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import {
    ResumeDetailsErrorState,
    ResumeDetailsSkeleton,
    ResumeForm,
    ResumeNotFoundState,
} from "@/components/resumes";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useResume } from "@/hooks/resumes/use-resume";

export default function EditResumePage() {
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
            <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
            >
                <Link href={`/resumes/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Resume
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Resume</h1>

                <p className="text-slate-500">
                    Update your resume title and summary.
                </p>
            </div>

            {isLoading && <ResumeDetailsSkeleton />}

            {!isLoading && isNotFound && <ResumeNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ResumeDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && resume && (
                <Card>
                    <CardHeader>
                        <CardTitle>Resume Details</CardTitle>

                        <CardDescription>
                            Make changes to your resume information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ResumeForm
                            mode="edit"
                            resumeId={resume.id}
                            defaultValues={{
                                title: resume.title,
                                summary: resume.summary ?? "",
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
