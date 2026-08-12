"use client";

import { cn } from "@/lib/utils";
import { ApplicationStats } from "@/types/dashboard.types";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PIPELINE_STEPS: {
    key: keyof ApplicationStats;
    label: string;
    className: string;
}[] = [
    {
        key: "applied",
        label: "Applied",
        className: "bg-blue-50 text-blue-700 ring-blue-600/20",
    },
    {
        key: "screening",
        label: "Screening",
        className: "bg-amber-50 text-amber-700 ring-amber-600/20",
    },
    {
        key: "interviewScheduled",
        label: "Interview Scheduled",
        className: "bg-purple-50 text-purple-700 ring-purple-600/20",
    },
    {
        key: "offerReceived",
        label: "Offer Received",
        className: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    },
    {
        key: "rejected",
        label: "Rejected",
        className: "bg-slate-100 text-slate-600 ring-slate-500/20",
    },
];

interface ApplicationPipelineProps {
    stats: ApplicationStats;
}

export default function ApplicationPipeline({
    stats,
}: ApplicationPipelineProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Application Pipeline</CardTitle>

                <CardDescription>
                    Overview of your applications by status
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {PIPELINE_STEPS.map((step) => (
                        <div
                            key={step.key}
                            className={cn(
                                "flex flex-col items-center gap-2 rounded-lg p-4 ring-1 ring-inset",
                                step.className
                            )}
                        >
                            <span className="text-2xl font-bold">
                                {stats[step.key]}
                            </span>

                            <span className="text-center text-xs font-medium">
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function ApplicationPipelineSkeleton() {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
            </CardHeader>

            <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            className="h-24 w-full rounded-lg"
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
