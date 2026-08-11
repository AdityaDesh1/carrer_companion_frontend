import Link from "next/link";
import { MessagesSquare, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function InterviewsEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No interviews yet</CardTitle>

                <CardDescription>
                    Start tracking your upcoming and completed interviews.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <MessagesSquare className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Keep every interview organized — from scheduling to feedback
                    and follow-up.
                </p>

                <Button asChild>
                    <Link href="/interviews/new">
                        <Plus className="h-4 w-4" />
                        Add Interview
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
