"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    ApplicationDetails,
    ApplicationDetailsErrorState,
    ApplicationDetailsSkeleton,
    ApplicationNotFoundState,
    DeleteApplicationDialog,
} from "@/components/applications";
import { Button } from "@/components/ui/button";
import { useApplication } from "@/hooks/applications/use-application";

export default function ApplicationDetailsPage() {
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    <Link href="/applications">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Applications
                    </Link>
                </Button>

                {!isLoading && !isError && application && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={`/applications/${application.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                                Edit Application
                            </Link>
                        </Button>

                        <DeleteApplicationDialog
                            applicationId={application.id}
                            company={application.company}
                            role={application.role}
                            redirectTo="/applications"
                        />
                    </div>
                )}
            </div>

            {isLoading && <ApplicationDetailsSkeleton />}

            {!isLoading && isNotFound && <ApplicationNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ApplicationDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && application && (
                <ApplicationDetails application={application} />
            )}
        </div>
    );
}
