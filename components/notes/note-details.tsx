"use client";

import { CalendarDays } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { Note } from "@/types/note.types";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface NoteDetailsProps {
    note: Note;
}

export default function NoteDetails({ note }: NoteDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <div className="space-y-1">
                    <CardTitle className="text-2xl">
                        {note.title}
                    </CardTitle>

                    <CardDescription>
                        Note details and metadata
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-sm font-medium text-slate-900">
                        Content
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {note.content}
                    </p>
                </div>

                <Separator />

                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Created
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(note.createdAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Last Updated
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(note.updatedAt)}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
}
