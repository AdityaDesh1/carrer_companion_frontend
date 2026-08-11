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
import { useDeleteProject } from "@/hooks/projects/use-delete-project";
import { cn } from "@/lib/utils";

interface DeleteProjectDialogProps {
    projectId: string;
    projectTitle: string;
    redirectTo?: string;
    className?: string;
    size?: VariantProps<typeof buttonVariants>["size"];
}

export default function DeleteProjectDialog({
    projectId,
    projectTitle,
    redirectTo,
    className,
    size = "default",
}: DeleteProjectDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const deleteProject = useDeleteProject();

    const handleDelete = async () => {
        try {
            await deleteProject.mutateAsync(projectId);

            toast.success("Project deleted successfully.");

            setOpen(false);

            if (redirectTo) {
                router.push(redirectTo);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        "Failed to delete project."
                );
                return;
            }

            toast.error("Failed to delete project.");
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
                    <AlertDialogTitle>Delete project?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete{" "}
                        <span className="font-medium text-foreground">
                            {projectTitle}
                        </span>
                        . This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={deleteProject.isPending}>
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={deleteProject.isPending}
                    >
                        {deleteProject.isPending
                            ? "Deleting..."
                            : "Delete Project"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
