"use client";

import { CalendarDays, ExternalLink, Hash } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { cn } from "@/lib/utils";
import {
    formatResourceType,
    Resource,
    ResourceType,
} from "@/types/resource.types";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TYPE_STYLES: Record<ResourceType, string> = {
    [ResourceType.ARTICLE]: "bg-blue-50 text-blue-700 ring-blue-600/20",
    [ResourceType.VIDEO]: "bg-purple-50 text-purple-700 ring-purple-600/20",
    [ResourceType.COURSE]: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    [ResourceType.DOCUMENTATION]: "bg-amber-50 text-amber-700 ring-amber-600/20",
    [ResourceType.GITHUB]: "bg-slate-100 text-slate-700 ring-slate-500/20",
    [ResourceType.OTHER]: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

interface ResourceDetailsProps {
    resource: Resource;
}

export default function ResourceDetails({ resource }: ResourceDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-2xl">
                            {resource.title}
                        </CardTitle>

                        <CardDescription>
                            Resource details and metadata
                        </CardDescription>
                    </div>

                    <span
                        className={cn(
                            "inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                            TYPE_STYLES[resource.type]
                        )}
                    >
                        {formatResourceType(resource.type)}
                    </span>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-sm font-medium text-slate-900">
                        Description
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {resource.description || "No description provided."}
                    </p>
                </div>

                <div className="space-y-2">
                    <h2 className="flex items-center gap-2 text-sm font-medium text-slate-900">
                        <ExternalLink className="h-4 w-4 text-slate-400" />
                        URL
                    </h2>

                    <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-sm text-primary hover:underline"
                    >
                        {resource.url}
                    </a>
                </div>

                <Separator />

                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Created
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(resource.createdAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Last Updated
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(resource.updatedAt)}
                        </dd>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Hash className="h-3.5 w-3.5" />
                            Resource ID
                        </dt>

                        <dd className="break-all font-mono text-sm text-slate-900">
                            {resource.id}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
}
