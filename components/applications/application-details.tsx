"use client";

import { CalendarDays, Hash, StickyNote } from "lucide-react";

import ApplicationStatusBadge from "@/components/applications/application-status-badge";
import { formatDate } from "@/lib/format-date";
import { Application } from "@/types/application";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ApplicationDetailsProps {
    application: Application;
}

export default function ApplicationDetails({
    application,
}: ApplicationDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-2xl">
                            {application.company}
                        </CardTitle>

                        <CardDescription className="text-base">
                            {application.role}
                        </CardDescription>
                    </div>

                    <ApplicationStatusBadge status={application.status} />
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h2 className="flex items-center gap-2 text-sm font-medium text-slate-900">
                        <StickyNote className="h-4 w-4 text-slate-400" />
                        Notes
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {application.notes || "No notes provided."}
                    </p>
                </div>

                <Separator />

                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Applied
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(application.appliedAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Created
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(application.createdAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Last Updated
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(application.updatedAt)}
                        </dd>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Hash className="h-3.5 w-3.5" />
                            Application ID
                        </dt>

                        <dd className="break-all font-mono text-sm text-slate-900">
                            {application.id}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
}
