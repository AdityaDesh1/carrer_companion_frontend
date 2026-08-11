import Link from "next/link";
import { FolderX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ProjectNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Project not found</CardTitle>

                <CardDescription>
                    This project may have been removed or the link is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <FolderX className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your projects list to continue managing your job
                    search.
                </p>

                <Button asChild>
                    <Link href="/projects">Back to Projects</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
