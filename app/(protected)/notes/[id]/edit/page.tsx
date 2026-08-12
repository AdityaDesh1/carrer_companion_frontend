"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

import {
    NoteDetailsErrorState,
    NoteDetailsSkeleton,
    NoteForm,
    NoteNotFoundState,
} from "@/components/notes";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNote } from "@/hooks/notes/use-note";

export default function EditNotePage() {
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
            <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
            >
                <Link href={`/notes/${id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Note
                </Link>
            </Button>

            <div>
                <h1 className="text-3xl font-bold">Edit Note</h1>

                <p className="text-slate-500">
                    Update your note title and content.
                </p>
            </div>

            {isLoading && <NoteDetailsSkeleton />}

            {!isLoading && isNotFound && <NoteNotFoundState />}

            {!isLoading && isError && !isNotFound && (
                <NoteDetailsErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && note && (
                <Card>
                    <CardHeader>
                        <CardTitle>Note Details</CardTitle>

                        <CardDescription>
                            Make changes to your note information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <NoteForm
                            mode="edit"
                            noteId={note.id}
                            defaultValues={{
                                title: note.title,
                                content: note.content,
                            }}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
