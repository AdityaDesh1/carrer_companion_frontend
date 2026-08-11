"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import {
    ResourceDetailsErrorState,
    ResourceDetailsSkeleton,
    ResourceForm,
    ResourceNotFoundState,
} from "@/components/resources";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useResource } from "@/hooks/resources/use-resource";

export default function EditResourcePage() {
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
            <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
            >
                <Link href={`/resources/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Resource
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Resource</h1>

                <p className="text-slate-500">
                    Update your resource title, type, URL, and description.
                </p>
            </div>

            {isLoading && <ResourceDetailsSkeleton />}

            {!isLoading && isNotFound && <ResourceNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <ResourceDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && resource && (
                <Card>
                    <CardHeader>
                        <CardTitle>Resource Details</CardTitle>

                        <CardDescription>
                            Make changes to your resource information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ResourceForm
                            mode="edit"
                            resourceId={resource.id}
                            defaultValues={{
                                title: resource.title,
                                type: resource.type,
                                url: resource.url,
                                description: resource.description ?? "",
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
