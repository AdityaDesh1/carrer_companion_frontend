"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    ResourceDetails,
    ResourceDetailsErrorState,
    ResourceDetailsSkeleton,
    ResourceNotFoundState,
} from "@/components/resources";
import DeleteResourceDialog from "@/components/resources/delete-resource-dialog";
import { Button } from "@/components/ui/button";
import { useResource } from "@/hooks/resources/use-resource";

export default function ResourceDetailsPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: resource,
        isLoading,
        isError,
        error,
        refetch,
    } = useResource(id);

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
                    <Link href="/resources">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Resources
                    </Link>
                </Button>

                {!isLoading && !isError && resource && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={`/resources/${resource.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                                Edit Resource
                            </Link>
                        </Button>

                        <DeleteResourceDialog
                            resourceId={resource.id}
                            resourceTitle={resource.title}
                            redirectTo="/resources"
                        />
                    </div>
                )}
            </div>

            {isLoading && <ResourceDetailsSkeleton />}

            {!isLoading && isNotFound && <ResourceNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ResourceDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && resource && (
                <ResourceDetails resource={resource} />
            )}
        </div>
    );
}
