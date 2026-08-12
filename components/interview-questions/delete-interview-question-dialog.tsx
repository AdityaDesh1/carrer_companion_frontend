"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDeleteInterviewQuestion } from "@/hooks/interview-questions/use-delete-interview-question";
import { cn } from "@/lib/utils";

interface DeleteInterviewQuestionDialogProps {
    interviewQuestionId: string;
    questionText: string;
    redirectTo?: string;
    className?: string;
    size?: VariantProps<typeof buttonVariants>["size"];
}

export default function DeleteInterviewQuestionDialog({
    interviewQuestionId,
    questionText,
    redirectTo,
    className,
    size = "default",
}: DeleteInterviewQuestionDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const deleteInterviewQuestion = useDeleteInterviewQuestion();

    const handleDelete = async () => {
        try {
            await deleteInterviewQuestion.mutateAsync(interviewQuestionId);

            toast.success("Question deleted successfully.");

            setOpen(false);

            if (redirectTo) {
                router.push(redirectTo);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        "Failed to delete question."
                );
                return;
            }

            toast.error("Failed to delete question.");
        }
    };

    const truncatedQuestion =
        questionText.length > 80
            ? `${questionText.slice(0, 80)}...`
            : questionText;

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    type="button"
                    variant="destructive"
                    size={size}
                    className={cn("w-full sm:w-auto", className)}
                >
                    <Trash2 className="h-4 w-4" />
                    Delete
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete question?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete{" "}
                        <span className="font-medium text-foreground">
                            {truncatedQuestion}
                        </span>
                        . This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel
                        disabled={deleteInterviewQuestion.isPending}
                    >
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={deleteInterviewQuestion.isPending}
                    >
                        {deleteInterviewQuestion.isPending
                            ? "Deleting..."
                            : "Delete Question"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
