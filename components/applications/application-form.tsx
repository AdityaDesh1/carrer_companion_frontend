"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    applicationSchema,
    ApplicationFormValues,
} from "@/schemas/application.schema";
import {
    APPLICATION_STATUSES,
    formatApplicationStatus,
} from "@/types/application";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateApplication } from "@/hooks/applications/use-create-application";
import { useUpdateApplication } from "@/hooks/applications/use-update-application";
import { cn } from "@/lib/utils";

interface ApplicationFormProps {
    mode?: "create" | "edit";
    applicationId?: string;
    defaultValues?: ApplicationFormValues;
}

export default function ApplicationForm({
    mode = "create",
    applicationId,
    defaultValues,
}: ApplicationFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createApplication = useCreateApplication();
    const updateApplication = useUpdateApplication(applicationId ?? "");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ApplicationFormValues>({
        resolver: zodResolver(applicationSchema),
        defaultValues: defaultValues ?? {
            company: "",
            role: "",
            status: "APPLIED",
            notes: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateApplication.isPending
        : createApplication.isPending;

    const handleCancel = () => {
        if (isEditMode && applicationId) {
            router.push(`/applications/${applicationId}`);
            return;
        }

        router.push("/applications");
    };

    const onSubmit = async (data: ApplicationFormValues) => {
        try {
            if (isEditMode) {
                if (!applicationId) {
                    toast.error("Application ID is missing.");
                    return;
                }

                await updateApplication.mutateAsync(data);

                toast.success("Application updated successfully.");

                router.push(`/applications/${applicationId}`);
                return;
            }

            await createApplication.mutateAsync(data);

            toast.success("Application created successfully.");

            router.push("/applications");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} application.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} application.`
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>

                <Input
                    placeholder="Acme Corp"
                    {...register("company")}
                />

                {errors.company && (
                    <p className="text-sm text-red-500">
                        {errors.company.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>

                <Input
                    placeholder="Software Engineer"
                    {...register("role")}
                />

                {errors.role && (
                    <p className="text-sm text-red-500">
                        {errors.role.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>

                <select
                    className={cn(
                        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
                        errors.status &&
                            "border-destructive ring-3 ring-destructive/20"
                    )}
                    {...register("status")}
                >
                    {APPLICATION_STATUSES.map((status) => (
                        <option key={status} value={status}>
                            {formatApplicationStatus(status)}
                        </option>
                    ))}
                </select>

                {errors.status && (
                    <p className="text-sm text-red-500">
                        {errors.status.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Notes</label>

                <Textarea
                    rows={5}
                    placeholder="Add any notes about this application..."
                    {...register("notes")}
                />

                {errors.notes && (
                    <p className="text-sm text-red-500">
                        {errors.notes.message}
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
                          : "Create Application"}
                </Button>
            </div>
        </form>
    );
}
