"use client";

import { CalendarDays, Hash, Layers, MessageSquare, StickyNote } from "lucide-react";

import InterviewStatusBadge from "@/components/interviews/interview-status-badge";
import { formatDate } from "@/lib/format-date";
import { formatDateTime } from "@/lib/format-datetime";
import { Interview } from "@/types/interview";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InterviewDetailsProps {
    interview: Interview;
}

export default function InterviewDetails({ interview }: InterviewDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-2xl">
                            {interview.company}
                        </CardTitle>

                        <CardDescription className="text-base">
                            {interview.role}
                        </CardDescription>
                    </div>

                    <InterviewStatusBadge status={interview.status} />
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Layers className="h-3.5 w-3.5" />
                            Round
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {interview.round}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Scheduled
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDateTime(interview.scheduledAt)}
                        </dd>
                    </div>
                </dl>

                <Separator />

                <div className="space-y-2">
                    <h2 className="flex items-center gap-2 text-sm font-medium text-slate-900">
                        <StickyNote className="h-4 w-4 text-slate-400" />
                        Notes
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {interview.notes || "No notes provided."}
                    </p>
                </div>

                <div className="space-y-2">
                    <h2 className="flex items-center gap-2 text-sm font-medium text-slate-900">
                        <MessageSquare className="h-4 w-4 text-slate-400" />
                        Feedback
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {interview.feedback || "No feedback provided."}
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
                            {formatDate(interview.createdAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Last Updated
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(interview.updatedAt)}
                        </dd>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Hash className="h-3.5 w-3.5" />
                            Interview ID
                        </dt>

                        <dd className="break-all font-mono text-sm text-slate-900">
                            {interview.id}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
}
