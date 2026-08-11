"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    projectSchema,
    ProjectFormValues,
} from "@/schemas/project.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProject } from "@/hooks/projects/use-create-project";
import { useUpdateProject } from "@/hooks/projects/use-update-project";

interface ProjectFormProps {
    mode?: "create" | "edit";
    projectId?: string;
    defaultValues?: ProjectFormValues;
}

export default function ProjectForm({
    mode = "create",
    projectId,
    defaultValues,
}: ProjectFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createProject = useCreateProject();
    const updateProject = useUpdateProject(projectId ?? "");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: defaultValues ?? {
            title: "",
            description: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateProject.isPending
        : createProject.isPending;

    const handleCancel = () => {
        if (isEditMode && projectId) {
            router.push(`/projects/${projectId}`);
            return;
        }

        router.push("/projects");
    };

    const onSubmit = async (data: ProjectFormValues) => {
        try {
            if (isEditMode) {
                if (!projectId) {
                    toast.error("Project ID is missing.");
                    return;
                }

                await updateProject.mutateAsync(data);

                toast.success("Project updated successfully.");

                router.push(`/projects/${projectId}`);
                return;
            }

            await createProject.mutateAsync(data);

            toast.success("Project created successfully.");

            router.push("/projects");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} project.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} project.`
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Project Title
                </label>

                <Input
                    placeholder="Frontend Dashboard Architecture"
                    {...register("title")}
                />

                {errors.title && (
                    <p className="text-sm text-red-500">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Description
                </label>

                <Textarea
                    rows={5}
                    placeholder="Describe your project..."
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
                          : "Create Project"}
                </Button>
            </div>
        </form>
    );
}
