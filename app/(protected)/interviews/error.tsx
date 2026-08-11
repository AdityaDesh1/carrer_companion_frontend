"use client";

import { InterviewsErrorState } from "@/components/interviews";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Interviews</h1>

                <p className="text-slate-500">
                    Track and manage your upcoming and completed interviews.
                </p>
            </div>

            <InterviewsErrorState onRetry={reset} />
        </div>
    );
}
