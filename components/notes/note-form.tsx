"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import {
    noteSchema,
    NoteFormValues,
} from "@/schemas/note.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateNote } from "@/hooks/notes/use-create-note";
import { useUpdateNote } from "@/hooks/notes/use-update-note";

interface NoteFormProps {
    mode?: "create" | "edit";
    noteId?: string;
    defaultValues?: NoteFormValues;
}

export default function NoteForm({
    mode = "create",
    noteId,
    defaultValues,
}: NoteFormProps) {
    const router = useRouter();
    const isEditMode = mode === "edit";

    const createNote = useCreateNote();
    const updateNote = useUpdateNote(noteId ?? "");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<NoteFormValues>({
        resolver: zodResolver(noteSchema),
        defaultValues: defaultValues ?? {
            title: "",
            content: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const isPending = isEditMode
        ? updateNote.isPending
        : createNote.isPending;

    const handleCancel = () => {
        if (isEditMode && noteId) {
            router.push(`/notes/${noteId}`);
            return;
        }

        router.push("/notes");
    };

    const onSubmit = async (data: NoteFormValues) => {
        try {
            if (isEditMode) {
                if (!noteId) {
                    toast.error("Note ID is missing.");
                    return;
                }

                await updateNote.mutateAsync(data);

                toast.success("Note updated successfully.");

                router.push(`/notes/${noteId}`);
                return;
            }

            const createdNote = await createNote.mutateAsync(data);

            toast.success("Note created successfully.");

            router.push(`/notes/${createdNote.id}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                        `Failed to ${isEditMode ? "update" : "create"} note.`
                );
                return;
            }

            toast.error(
                `Failed to ${isEditMode ? "update" : "create"} note.`
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
                    placeholder="Interview preparation notes"
                    {...register("title")}
                />

                {errors.title && (
                    <p className="text-sm text-red-500">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>

                <Textarea
                    rows={8}
                    placeholder="Write your note here..."
                    {...register("content")}
                />

                {errors.content && (
                    <p className="text-sm text-red-500">
                        {errors.content.message}
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
                          : "Create Note"}
                </Button>
            </div>
        </form>
    );
}
