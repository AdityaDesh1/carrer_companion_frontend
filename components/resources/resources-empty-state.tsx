import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ResourcesEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No resources yet</CardTitle>

                <CardDescription>
                    Save useful articles, videos, courses, documentation, and
                    other career resources in one place.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <BookOpen className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Keep all your career learning materials and reference links
                    organized and easy to find.
                </p>

                <Button asChild>
                    <Link href="/resources/new">
                        <Plus className="h-4 w-4" />
                        Add Resource
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
