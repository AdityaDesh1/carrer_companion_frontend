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

interface InterviewQuestionDetailsErrorStateProps {
    onRetry: () => void;
}

export default function InterviewQuestionDetailsErrorState({
    onRetry,
}: InterviewQuestionDetailsErrorStateProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Unable to load question</CardTitle>

                <CardDescription>
                    Something went wrong while fetching this interview
                    question.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <AlertCircle className="h-14 w-14 text-destructive" />

                <p className="max-w-md text-sm text-slate-500">
                    Please check your connection and try again.
                </p>

                <Button onClick={onRetry}>Try Again</Button>
            </CardContent>
        </Card>
    );
}
