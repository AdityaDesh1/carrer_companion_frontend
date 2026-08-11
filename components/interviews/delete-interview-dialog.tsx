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
import { useDeleteInterview } from "@/hooks/interviews/use-delete-interview";
import { cn } from "@/lib/utils";

interface DeleteInterviewDialogProps {
    interviewId: string;
    company: string;
    role: string;
    round: string;
    redirectTo?: string;
    className?: string;
    size?: VariantProps<typeof buttonVariants>["size"];
}

export default function DeleteInterviewDialog({
    interviewId,
    company,
    role,
    round,
    redirectTo,
    className,
    size = "default",
}: DeleteInterviewDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const deleteInterview = useDeleteInterview();

    const handleDelete = async () => {
        try {
            await deleteInterview.mutateAsync(interviewId);

            toast.success("Interview deleted successfully.");

            setOpen(false);

            if (redirectTo) {
                router.push(redirectTo);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        "Failed to delete interview."
                );
                return;
            }

            toast.error("Failed to delete interview.");
        }
    };

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
                    <AlertDialogTitle>Delete interview?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete the{" "}
                        <span className="font-medium text-foreground">
                            {round}
                        </span>{" "}
                        interview for{" "}
                        <span className="font-medium text-foreground">
                            {role}
                        </span>{" "}
                        at{" "}
                        <span className="font-medium text-foreground">
                            {company}
                        </span>
                        . This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={deleteInterview.isPending}>
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={deleteInterview.isPending}
                    >
                        {deleteInterview.isPending
                            ? "Deleting..."
                            : "Delete Interview"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
