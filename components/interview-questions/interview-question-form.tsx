"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    interviewQuestionSchema,
    InterviewQuestionFormValues,
} from "@/schemas/interview-question.schema";
import {
    DIFFICULTIES,
    Difficulty,
    formatDifficulty,
} from "@/types/interview-question.types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateInterviewQuestion } from "@/hooks/interview-questions/use-create-interview-question";
import { useUpdateInterviewQuestion } from "@/hooks/interview-questions/use-update-interview-question";
import { cn } from "@/lib/utils";

interface InterviewQuestionFormProps {
    mode?: "create" | "edit";
    interviewQuestionId?: string;
    defaultValues?: InterviewQuestionFormValues;
}

function toPayload(data: InterviewQuestionFormValues) {
    const { question, answer, topic, difficulty, company } = data;

    return {
        question,
        topic,
        difficulty,
        ...(answer ? { answer } : {}),
        ...(company ? { company } : {}),
    };
}

export default function InterviewQuestionForm({
    mode = "create",
    interviewQuestionId,
    defaultValues,
}: InterviewQuestionFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createInterviewQuestion = useCreateInterviewQuestion();
    const updateInterviewQuestion = useUpdateInterviewQuestion(
        interviewQuestionId ?? ""
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InterviewQuestionFormValues>({
        resolver: zodResolver(interviewQuestionSchema),
        defaultValues: defaultValues ?? {
            question: "",
            answer: "",
            topic: "",
            difficulty: Difficulty.MEDIUM,
            company: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateInterviewQuestion.isPending
        : createInterviewQuestion.isPending;

    const handleCancel = () => {
        if (isEditMode && interviewQuestionId) {
            router.push(`/interview-questions/${interviewQuestionId}`);
            return;
        }

        router.push("/interview-questions");
    };

    const onSubmit = async (data: InterviewQuestionFormValues) => {
        const payload = toPayload(data);

        try {
            if (isEditMode) {
                if (!interviewQuestionId) {
                    toast.error("Question ID is missing.");
                    return;
                }

                await updateInterviewQuestion.mutateAsync(payload);

                toast.success("Question updated successfully.");

                router.push(`/interview-questions/${interviewQuestionId}`);
                return;
            }

            const createdQuestion =
                await createInterviewQuestion.mutateAsync(payload);

            toast.success("Question created successfully.");

            router.push(`/interview-questions/${createdQuestion.id}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} question.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} question.`
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium">Question</label>

                <Textarea
                    rows={4}
                    placeholder="What is the difference between let and const?"
                    {...register("question")}
                />

                {errors.question && (
                    <p className="text-sm text-red-500">
                        {errors.question.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Answer</label>

                <Textarea
                    rows={6}
                    placeholder="Write your answer or notes here..."
                    {...register("answer")}
                />

                {errors.answer && (
                    <p className="text-sm text-red-500">
                        {errors.answer.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Topic</label>

                <Input
                    placeholder="JavaScript"
                    {...register("topic")}
                />

                {errors.topic && (
                    <p className="text-sm text-red-500">
                        {errors.topic.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>

                <select
                    className={cn(
                        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
                        errors.difficulty &&
                            "border-destructive ring-3 ring-destructive/20"
                    )}
                    {...register("difficulty")}
                >
                    {DIFFICULTIES.map((difficulty) => (
                        <option key={difficulty} value={difficulty}>
                            {formatDifficulty(difficulty)}
                        </option>
                    ))}
                </select>

                {errors.difficulty && (
                    <p className="text-sm text-red-500">
                        {errors.difficulty.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>

                <Input
                    placeholder="Google"
                    {...register("company")}
                />

                {errors.company && (
                    <p className="text-sm text-red-500">
                        {errors.company.message}
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
                          : "Create Question"}
                </Button>
            </div>
        </form>
    );
}
