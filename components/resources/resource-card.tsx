"use client";

import Link from "next/link";
import { CalendarDays, ExternalLink, Eye } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { cn } from "@/lib/utils";
import {
    formatResourceType,
    Resource,
    ResourceType,
} from "@/types/resource.types";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const TYPE_STYLES: Record<ResourceType, string> = {
    [ResourceType.ARTICLE]: "bg-blue-50 text-blue-700 ring-blue-600/20",
    [ResourceType.VIDEO]: "bg-purple-50 text-purple-700 ring-purple-600/20",
    [ResourceType.COURSE]: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    [ResourceType.DOCUMENTATION]: "bg-amber-50 text-amber-700 ring-amber-600/20",
    [ResourceType.GITHUB]: "bg-slate-100 text-slate-700 ring-slate-500/20",
    [ResourceType.OTHER]: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

interface ResourceCardProps {
    resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader className="gap-3">
                <div className="flex items-start justify-between gap-3">
                    <CardTitle className="line-clamp-2">
                        <Link
                            href={`/resources/${resource.id}`}
                            className="transition-colors hover:text-primary"
                        >
                            {resource.title}
                        </Link>
                    </CardTitle>

                    <span
                        className={cn(
                            "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                            TYPE_STYLES[resource.type]
                        )}
                    >
                        {formatResourceType(resource.type)}
                    </span>
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <CardDescription className="line-clamp-3 text-sm">
                    {resource.description || "No description provided."}
                </CardDescription>

                <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    onClick={(event) => event.stopPropagation()}
                >
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    <span className="line-clamp-1 break-all">{resource.url}</span>
                </a>

                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Created {formatDate(resource.createdAt)}</span>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/resources/${resource.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
