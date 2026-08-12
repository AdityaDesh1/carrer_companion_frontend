"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
    NoteCard,
    NoteCardSkeleton,
    NotesEmptyState,
    NotesErrorState,
} from "@/components/notes";
import { Button } from "@/components/ui/button";
import { useNotes } from "@/hooks/notes/use-notes";

const SKELETON_COUNT = 6;

export default function NotesPage() {
    const {
        data: notes,
        isLoading,
        isError,
        refetch,
    } = useNotes();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Notes</h1>

                    <p className="text-slate-500">
                        Capture and organize your career notes in one place.
                    </p>
                </div>

                <Button asChild className="w-full sm:w-auto">
                    <Link href="/notes/new">
                        <Plus className="h-4 w-4" />
                        Add Note
                    </Link>
                </Button>
            </div>

            {isLoading && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                        <NoteCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && isError && (
                <NotesErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && notes?.length === 0 && (
                <NotesEmptyState />
            )}

            {!isLoading && !isError && notes && notes.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {notes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            )}
        </div>
    );
}
