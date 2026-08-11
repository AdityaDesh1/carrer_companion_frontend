import Link from "next/link";
import { FolderKanban } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ProjectsEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No projects yet</CardTitle>

                <CardDescription>
                    Create your first project to start organizing your job search.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <FolderKanban className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Projects help you group applications, interviews, resumes,
                    and career resources in one place.
                </p>

                <Button asChild>
                    <Link href="/projects/new">
                        Create Your First Project
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
