"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    projectSchema,
    ProjectFormValues,
} from "@/schemas/project.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useCreateProject } from "@/hooks/projects/use-create-project";

export default function ProjectForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit = async (
        data: ProjectFormValues
    ) => {
        try {
            await createProject.mutateAsync(data);

            toast.success("Project created successfully.");

            router.push("/projects");
        } catch (error) {
            toast.error("Failed to create project.");
        }
    };

    const router = useRouter();

    const createProject = useCreateProject();

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

            <div className="flex justify-end gap-3">
                <Button
                    type="button"
                    variant="outline"
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    disabled={createProject.isPending}
                >
                    {createProject.isPending
                        ? "Creating..."
                        : "Create Project"}
                </Button>
            </div>
        </form>
    );
}