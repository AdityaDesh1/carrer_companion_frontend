"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    resumeSchema,
    ResumeFormValues,
} from "@/schemas/resume.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateResume } from "@/hooks/resumes/use-create-resume";
import { useUpdateResume } from "@/hooks/resumes/use-update-resume";

interface ResumeFormProps {
    mode?: "create" | "edit";
    resumeId?: string;
    defaultValues?: ResumeFormValues;
}

export default function ResumeForm({
    mode = "create",
    resumeId,
    defaultValues,
}: ResumeFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createResume = useCreateResume();
    const updateResume = useUpdateResume(resumeId ?? "");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ResumeFormValues>({
        resolver: zodResolver(resumeSchema),
        defaultValues: defaultValues ?? {
            title: "",
            summary: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateResume.isPending
        : createResume.isPending;

    const handleCancel = () => {
        if (isEditMode && resumeId) {
            router.push(`/resumes/${resumeId}`);
            return;
        }

        router.push("/resumes");
    };

    const onSubmit = async (data: ResumeFormValues) => {
        const payload = {
            title: data.title,
            ...(data.summary ? { summary: data.summary } : {}),
        };

        try {
            if (isEditMode) {
                if (!resumeId) {
                    toast.error("Resume ID is missing.");
                    return;
                }

                await updateResume.mutateAsync(payload);

                toast.success("Resume updated successfully.");

                router.push(`/resumes/${resumeId}`);
                return;
            }

            const createdResume = await createResume.mutateAsync(payload);

            toast.success("Resume created successfully.");

            router.push(`/resumes/${createdResume.id}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} resume.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} resume.`
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
                    placeholder="Software Engineer Resume"
                    {...register("title")}
                />

                {errors.title && (
                    <p className="text-sm text-red-500">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Summary</label>

                <Textarea
                    rows={5}
                    placeholder="Brief summary of your resume..."
                    {...register("summary")}
                />

                {errors.summary && (
                    <p className="text-sm text-red-500">
                        {errors.summary.message}
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
                          : "Create Resume"}
                </Button>
            </div>
        </form>
    );
}
