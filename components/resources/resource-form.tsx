"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    resourceSchema,
    ResourceFormValues,
} from "@/schemas/resource.schema";
import {
    formatResourceType,
    RESOURCE_TYPES,
    ResourceType,
} from "@/types/resource.types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateResource } from "@/hooks/resources/use-create-resource";
import { useUpdateResource } from "@/hooks/resources/use-update-resource";
import { cn } from "@/lib/utils";

interface ResourceFormProps {
    mode?: "create" | "edit";
    resourceId?: string;
    defaultValues?: ResourceFormValues;
}

export default function ResourceForm({
    mode = "create",
    resourceId,
    defaultValues,
}: ResourceFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createResource = useCreateResource();
    const updateResource = useUpdateResource(resourceId ?? "");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ResourceFormValues>({
        resolver: zodResolver(resourceSchema),
        defaultValues: defaultValues ?? {
            title: "",
            type: ResourceType.ARTICLE,
            url: "",
            description: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateResource.isPending
        : createResource.isPending;

    const handleCancel = () => {
        if (isEditMode && resourceId) {
            router.push(`/resources/${resourceId}`);
            return;
        }

        router.push("/resources");
    };

    const onSubmit = async (data: ResourceFormValues) => {
        try {
            if (isEditMode) {
                if (!resourceId) {
                    toast.error("Resource ID is missing.");
                    return;
                }

                await updateResource.mutateAsync(data);

                toast.success("Resource updated successfully.");

                router.push(`/resources/${resourceId}`);
                return;
            }

            const createdResource = await createResource.mutateAsync(data);

            toast.success("Resource created successfully.");

            router.push(`/resources/${createdResource.id}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} resource.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} resource.`
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>

                <Input
                    placeholder="React Performance Guide"
                    {...register("title")}
                />

                {errors.title && (
                    <p className="text-sm text-red-500">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>

                <select
                    className={cn(
                        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
                        errors.type &&
                            "border-destructive ring-3 ring-destructive/20"
                    )}
                    {...register("type")}
                >
                    {RESOURCE_TYPES.map((type) => (
                        <option key={type} value={type}>
                            {formatResourceType(type)}
                        </option>
                    ))}
                </select>

                {errors.type && (
                    <p className="text-sm text-red-500">
                        {errors.type.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">URL</label>

                <Input
                    type="url"
                    placeholder="https://example.com/resource"
                    {...register("url")}
                />

                {errors.url && (
                    <p className="text-sm text-red-500">
                        {errors.url.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>

                <Textarea
                    rows={5}
                    placeholder="Brief description of this resource..."
                    {...register("description")}
                />

                {errors.description && (
                    <p className="text-sm text-red-500">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    disabled={isPending}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    disabled={isPending}
                >
                    {isPending
                        ? isEditMode
                            ? "Saving..."
                            : "Creating..."
                        : isEditMode
                          ? "Save Changes"
                          : "Create Resource"}
                </Button>
            </div>
        </form>
    );
}
