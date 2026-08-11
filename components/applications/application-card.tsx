"use client";

import Link from "next/link";
import { CalendarDays, Eye, StickyNote } from "lucide-react";

import ApplicationStatusBadge from "@/components/applications/application-status-badge";
import { formatDate } from "@/lib/format-date";
import { Application } from "@/types/application";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ApplicationCardProps {
    application: Application;
}

export default function ApplicationCard({
    application,
}: ApplicationCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader className="gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 space-y-1">
                        <CardTitle className="line-clamp-1">
                            <Link
                                href={`/applications/${application.id}`}
                                className="transition-colors hover:text-primary"
                            >
                                {application.company}
                            </Link>
                        </CardTitle>

                        <CardDescription className="line-clamp-1 text-sm">
                            {application.role}
                        </CardDescription>
                    </div>

                    <ApplicationStatusBadge status={application.status} />
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                {application.notes && (
                    <div className="flex gap-2 text-sm text-slate-600">
                        <StickyNote className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

                        <p className="line-clamp-3">{application.notes}</p>
                    </div>
                )}

                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Applied {formatDate(application.appliedAt)}</span>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/applications/${application.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
