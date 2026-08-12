"use client";

import { Children } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface RecentActivitySectionProps {
    title: string;
    viewAllHref: string;
    viewAllLabel: string;
    emptyMessage: string;
    isLoading: boolean;
    isError: boolean;
    onRetry?: () => void;
    children?: React.ReactNode;
}

function RecentActivitySectionSkeleton() {
    return (
        <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-16 w-full rounded-lg" />
            ))}
        </div>
    );
}

export default function RecentActivitySection({
    title,
    viewAllHref,
    viewAllLabel,
    emptyMessage,
    isLoading,
    isError,
    onRetry,
    children,
}: RecentActivitySectionProps) {
    const hasItems = Children.count(children) > 0;

    return (
        <Card className="h-full">
            <CardHeader className="pb-3">
                <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {isLoading && <RecentActivitySectionSkeleton />}

                {!isLoading && isError && (
                    <div className="space-y-3 py-2 text-center">
                        <p className="text-sm text-slate-500">
                            Unable to load {title.toLowerCase()}.
                        </p>

                        {onRetry && (
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={onRetry}
                            >
                                Try again
                            </Button>
                        )}
                    </div>
                )}

                {!isLoading && !isError && !hasItems && (
                    <div className="space-y-3 py-2">
                        <p className="text-sm text-slate-500">
                            {emptyMessage}
                        </p>

                        <Button asChild variant="outline" size="sm">
                            <Link href={viewAllHref}>{viewAllLabel}</Link>
                        </Button>
                    </div>
                )}

                {!isLoading && !isError && hasItems && (
                    <div className="space-y-3">{children}</div>
                )}

                {!isLoading && !isError && hasItems && (
                    <Link
                        href={viewAllHref}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                        {viewAllLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                )}
            </CardContent>
        </Card>
    );
}
