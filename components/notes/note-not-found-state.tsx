import Link from "next/link";
import { NotebookPen } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NoteNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Note not found</CardTitle>

                <CardDescription>
                    This note may have been removed or the link is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <NotebookPen className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your notes list to continue managing your career
                    notes.
                </p>

                <Button asChild>
                    <Link href="/notes">Back to Notes</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
