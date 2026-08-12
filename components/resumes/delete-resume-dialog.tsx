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
import { useDeleteResume } from "@/hooks/resumes/use-delete-resume";
import { cn } from "@/lib/utils";

interface DeleteResumeDialogProps {
    resumeId: string;
    resumeTitle: string;
    redirectTo?: string;
    className?: string;
    size?: VariantProps<typeof buttonVariants>["size"];
}

export default function DeleteResumeDialog({
    resumeId,
    resumeTitle,
    redirectTo,
    className,
    size = "default",
}: DeleteResumeDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const deleteResume = useDeleteResume();

    const handleDelete = async () => {
        try {
            await deleteResume.mutateAsync(resumeId);

            toast.success("Resume deleted successfully.");

            setOpen(false);

            if (redirectTo) {
                router.push(redirectTo);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        "Failed to delete resume."
                );
                return;
            }

            toast.error("Failed to delete resume.");
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
                    <AlertDialogTitle>Delete resume?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete{" "}
                        <span className="font-medium text-foreground">
                            {resumeTitle}
                        </span>
                        . This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={deleteResume.isPending}>
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={deleteResume.isPending}
                    >
                        {deleteResume.isPending
                            ? "Deleting..."
                            : "Delete Resume"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
