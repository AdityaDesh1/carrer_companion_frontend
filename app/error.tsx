"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100 px-6 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">
                    Something went wrong
                </h1>

                <p className="max-w-md text-slate-500">
                    An unexpected error occurred. Please try again or return to
                    the dashboard.
                </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={reset}>Try Again</Button>

                <Button asChild variant="outline">
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
            </div>
        </div>
    );
}
