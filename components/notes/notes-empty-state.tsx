import Link from "next/link";
import { NotebookPen, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NotesEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No notes yet</CardTitle>

                <CardDescription>
                    Create your first note to keep your career thoughts,
                    preparation notes, and important information organized.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <NotebookPen className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Capture interview prep, job search ideas, and anything else
                    you want to remember for your career journey.
                </p>

                <Button asChild>
                    <Link href="/notes/new">
                        <Plus className="h-4 w-4" />
                        Add Note
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
