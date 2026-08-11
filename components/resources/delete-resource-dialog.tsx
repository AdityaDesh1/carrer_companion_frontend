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
import { useDeleteResource } from "@/hooks/resources/use-delete-resource";
import { cn } from "@/lib/utils";

interface DeleteResourceDialogProps {
    resourceId: string;
    resourceTitle: string;
    redirectTo?: string;
    className?: string;
    size?: VariantProps<typeof buttonVariants>["size"];
}

export default function DeleteResourceDialog({
    resourceId,
    resourceTitle,
    redirectTo,
    className,
    size = "default",
}: DeleteResourceDialogProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const deleteResource = useDeleteResource();

    const handleDelete = async () => {
        try {
            await deleteResource.mutateAsync(resourceId);

            toast.success("Resource deleted successfully.");

            setOpen(false);

            if (redirectTo) {
                router.push(redirectTo);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        "Failed to delete resource."
                );
                return;
            }

            toast.error("Failed to delete resource.");
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
                    <AlertDialogTitle>Delete resource?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This will permanently delete{" "}
                        <span className="font-medium text-foreground">
                            {resourceTitle}
                        </span>
                        . This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={deleteResource.isPending}>
                        Cancel
                    </AlertDialogCancel>

                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={deleteResource.isPending}
                    >
                        {deleteResource.isPending
                            ? "Deleting..."
                            : "Delete Resource"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
