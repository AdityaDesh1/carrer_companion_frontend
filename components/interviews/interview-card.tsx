"use client";

import Link from "next/link";
import { CalendarDays, Eye, Layers, StickyNote } from "lucide-react";

import InterviewStatusBadge from "@/components/interviews/interview-status-badge";
import { formatDateTime } from "@/lib/format-datetime";
import { Interview } from "@/types/interview";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface InterviewCardProps {
    interview: Interview;
}

export default function InterviewCard({ interview }: InterviewCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader className="gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 space-y-1">
                        <CardTitle className="line-clamp-1">
                            <Link
                                href={`/interviews/${interview.id}`}
                                className="transition-colors hover:text-primary"
                            >
                                {interview.company}
                            </Link>
                        </CardTitle>

                        <CardDescription className="line-clamp-1 text-sm">
                            {interview.role}
                        </CardDescription>
                    </div>

                    <InterviewStatusBadge status={interview.status} />
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Layers className="h-4 w-4 shrink-0 text-slate-400" />
                    <span className="line-clamp-1">{interview.round}</span>
                </div>

                {interview.notes && (
                    <div className="flex gap-2 text-sm text-slate-600">
                        <StickyNote className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                        <p className="line-clamp-2">{interview.notes}</p>
                    </div>
                )}

                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Scheduled {formatDateTime(interview.scheduledAt)}</span>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/interviews/${interview.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
