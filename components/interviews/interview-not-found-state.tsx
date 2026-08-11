import Link from "next/link";
import { MessagesSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function InterviewNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Interview not found</CardTitle>

                <CardDescription>
                    This interview may have been removed or the link is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <MessagesSquare className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your interviews list to continue managing your job
                    search.
                </p>

                <Button asChild>
                    <Link href="/interviews">Back to Interviews</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
