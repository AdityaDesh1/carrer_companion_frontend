import Link from "next/link";
import { FileX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ResumeNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Resume not found</CardTitle>

                <CardDescription>
                    This resume may have been removed or the link is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <FileX className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your resumes list to continue managing your
                    career profile.
                </p>

                <Button asChild>
                    <Link href="/resumes">Back to Resumes</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
