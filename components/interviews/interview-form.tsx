"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    interviewSchema,
    InterviewFormValues,
} from "@/schemas/interview.schema";
import {
    INTERVIEW_STATUSES,
    formatInterviewStatus,
} from "@/types/interview";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateInterview } from "@/hooks/interviews/use-create-interview";
import { useUpdateInterview } from "@/hooks/interviews/use-update-interview";
import { cn } from "@/lib/utils";

interface InterviewFormProps {
    mode?: "create" | "edit";
    interviewId?: string;
    defaultValues?: InterviewFormValues;
}

export default function InterviewForm({
    mode = "create",
    interviewId,
    defaultValues,
}: InterviewFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createInterview = useCreateInterview();
    const updateInterview = useUpdateInterview(interviewId ?? "");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InterviewFormValues>({
        resolver: zodResolver(interviewSchema),
        defaultValues: defaultValues ?? {
            company: "",
            role: "",
            round: "",
            scheduledAt: "",
            status: "SCHEDULED",
            notes: "",
            feedback: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateInterview.isPending
        : createInterview.isPending;

    const handleCancel = () => {
        if (isEditMode && interviewId) {
            router.push(`/interviews/${interviewId}`);
            return;
        }

        router.push("/interviews");
    };

    const onSubmit = async (data: InterviewFormValues) => {
        try {
            if (isEditMode) {
                if (!interviewId) {
                    toast.error("Interview ID is missing.");
                    return;
                }

                await updateInterview.mutateAsync(data);

                toast.success("Interview updated successfully.");

                router.push(`/interviews/${interviewId}`);
                return;
            }

            await createInterview.mutateAsync(data);

            toast.success("Interview created successfully.");

            router.push("/interviews");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} interview.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} interview.`
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
                <label className="text-sm font-medium">Round</label>

                <Input
                    placeholder="Technical Interview"
                    {...register("round")}
                />

                {errors.round && (
                    <p className="text-sm text-red-500">
                        {errors.round.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Scheduled Date & Time
                </label>

                <Input
                    type="datetime-local"
                    {...register("scheduledAt")}
                />

                {errors.scheduledAt && (
                    <p className="text-sm text-red-500">
                        {errors.scheduledAt.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>

                {!isEditMode && (
                    <p className="text-xs text-slate-500">
                        New interviews are assigned Scheduled status automatically.
                    </p>
                )}

                <select
                    className={cn(
                        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
                        errors.status &&
                            "border-destructive ring-3 ring-destructive/20"
                    )}
                    disabled={!isEditMode}
                    {...register("status")}
                >
                    {INTERVIEW_STATUSES.map((status) => (
                        <option key={status} value={status}>
                            {formatInterviewStatus(status)}
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
                    rows={4}
                    placeholder="Add any notes about this interview..."
                    {...register("notes")}
                />

                {errors.notes && (
                    <p className="text-sm text-red-500">
                        {errors.notes.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Feedback</label>

                <Textarea
                    rows={4}
                    placeholder="Add feedback after the interview..."
                    {...register("feedback")}
                />

                {errors.feedback && (
                    <p className="text-sm text-red-500">
                        {errors.feedback.message}
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
                          : "Create Interview"}
                </Button>
            </div>
        </form>
    );
}
