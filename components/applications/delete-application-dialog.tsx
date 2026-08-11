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
import { useDeleteApplication } from "@/hooks/applications/use-delete-application";
import { cn } from "@/lib/utils";

interface DeleteApplicationDialogProps {
    applicationId: string;
    company: string;
    role: string;
    redirectTo?: string;
    className?: string;
    size?: VariantProps<typeof buttonVariants>["size"];
}

export default function DeleteApplicationDialog({
    applicationId,
    company,
    role,
    redirectTo,
    className,
    size = "default",
}: DeleteApplicationDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const deleteApplication = useDeleteApplication();

    const handleDelete = async () => {
        try {
            await deleteApplication.mutateAsync(applicationId);

            toast.success("Application deleted successfully.");

            setOpen(false);

            if (redirectTo) {
                router.push(redirectTo);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        "Failed to delete application."
                );
                return;
            }

            toast.error("Failed to delete application.");
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
                    <AlertDialogTitle>Delete application?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete your application for{" "}
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
                    <AlertDialogCancel disabled={deleteApplication.isPending}>
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={deleteApplication.isPending}
                    >
                        {deleteApplication.isPending
                            ? "Deleting..."
                            : "Delete Application"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
