import Link from "next/link";
import { FileText, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ResumesEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No resumes yet</CardTitle>

                <CardDescription>
                    Create your first resume to start building your career
                    profile.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <FileText className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Save and manage your resume records in one place. Add a
                    title and summary to get started.
                </p>

                <Button asChild>
                    <Link href="/resumes/new">
                        <Plus className="h-4 w-4" />
                        Add Resume
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
