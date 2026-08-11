"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import {
    ApplicationDetailsErrorState,
    ApplicationDetailsSkeleton,
    ApplicationForm,
    ApplicationNotFoundState,
} from "@/components/applications";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useApplication } from "@/hooks/applications/use-application";

export default function EditApplicationPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: application,
        isLoading,
        isError,
        error,
        refetch,
    } = useApplication(id);

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
                <Link href={`/applications/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Application
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Application</h1>

                <p className="text-slate-500">
                    Update your application details and status.
                </p>
            </div>

            {isLoading && <ApplicationDetailsSkeleton />}

            {!isLoading && isNotFound && <ApplicationNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ApplicationDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && application && (
                <Card>
                    <CardHeader>
                        <CardTitle>Application Details</CardTitle>

                        <CardDescription>
                            Make changes to your application information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ApplicationForm
                            mode="edit"
                            applicationId={application.id}
                            defaultValues={{
                                company: application.company,
                                role: application.role,
                                status: application.status,
                                notes: application.notes ?? "",
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
