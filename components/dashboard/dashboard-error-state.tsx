"use client";

import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface DashboardErrorStateProps {
    onRetry: () => void;
}

export default function DashboardErrorState({
    onRetry,
}: DashboardErrorStateProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Unable to load dashboard data</CardTitle>

                <CardDescription>
                    Something went wrong while fetching your career overview.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <AlertCircle className="h-14 w-14 text-destructive" />

                <p className="max-w-md text-sm text-slate-500">
                    Please check your connection and try again.
                </p>

                <Button onClick={onRetry}>Try again</Button>
            </CardContent>
        </Card>
    );
}
