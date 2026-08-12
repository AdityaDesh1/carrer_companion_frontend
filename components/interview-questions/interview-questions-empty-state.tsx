import Link from "next/link";
import { CircleHelp, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function InterviewQuestionsEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No interview questions yet</CardTitle>

                <CardDescription>
                    Build your question bank to prepare for upcoming interviews.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <CircleHelp className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Save questions by topic, difficulty, and company so you can
                    review them before your next interview.
                </p>

                <Button asChild>
                    <Link href="/interview-questions/new">
                        <Plus className="h-4 w-4" />
                        Add Question
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
