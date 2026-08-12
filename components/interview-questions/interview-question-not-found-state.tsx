import Link from "next/link";
import { CircleHelp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function InterviewQuestionNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Question not found</CardTitle>

                <CardDescription>
                    This interview question may have been removed or the link
                    is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <CircleHelp className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your question bank to continue preparing for
                    interviews.
                </p>

                <Button asChild>
                    <Link href="/interview-questions">
                        Back to Questions
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
