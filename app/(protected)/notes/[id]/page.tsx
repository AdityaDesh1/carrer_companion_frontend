"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Pencil } from "lucide-react";

import {
    NoteDetails,
    NoteDetailsErrorState,
    NoteDetailsSkeleton,
    NoteNotFoundState,
} from "@/components/notes";
import DeleteNoteDialog from "@/components/notes/delete-note-dialog";
import { Button } from "@/components/ui/button";
import { useNote } from "@/hooks/notes/use-note";

export default function NoteDetailsPage() {
    const params = useParams<{ id: string }>();
    const id = params.id;

    const {
        data: note,
        isLoading,
        isError,
        error,
        refetch,
    } = useNote(id);

    const isNotFound =
        isError &&
        axios.isAxiosError(error) &&
        error.response?.status === 404;

    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    <Link href="/notes">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Notes
                    </Link>
                </Button>

                {!isLoading && !isError && note && (
                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href={`/notes/${note.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                                Edit Note
                            </Link>
                        </Button>

                        <DeleteNoteDialog
                            noteId={note.id}
                            noteTitle={note.title}
                            redirectTo="/notes"
                        />
                    </div>
                )}
            </div>

            {isLoading && <NoteDetailsSkeleton />}

            {!isLoading && isNotFound && <NoteNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <NoteDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && note && (
                <NoteDetails note={note} />
            )}
        </div>
    );
}
