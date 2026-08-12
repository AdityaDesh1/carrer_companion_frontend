"use client";

import Link from "next/link";
import { CalendarDays, Eye } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { Note } from "@/types/note.types";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface NoteCardProps {
    note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader>
                <CardTitle className="line-clamp-2">
                    <Link
                        href={`/notes/${note.id}`}
                        className="transition-colors hover:text-primary"
                    >
                        {note.title}
                    </Link>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <CardDescription className="line-clamp-3 whitespace-pre-wrap text-sm">
                    {note.content}
                </CardDescription>

                <div className="mt-auto space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>Created {formatDate(note.createdAt)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>Updated {formatDate(note.updatedAt)}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/notes/${note.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
