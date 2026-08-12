"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface DetailErrorStateProps {
    title: string;
    description: string;
    onRetry: () => void;
    backHref: string;
    backLabel: string;
}

export default function DetailErrorState({
    title,
    description,
    onRetry,
    backHref,
    backLabel,
}: DetailErrorStateProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>

                <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <AlertCircle className="h-14 w-14 text-destructive" />

                <p className="max-w-md text-sm text-slate-500">
                    Please check your connection and try again.
                </p>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Button onClick={onRetry}>Try Again</Button>

                    <Button asChild variant="outline">
                        <Link href={backHref}>{backLabel}</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
