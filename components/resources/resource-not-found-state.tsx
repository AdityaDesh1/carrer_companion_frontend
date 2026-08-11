import Link from "next/link";
import { BookX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ResourceNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Resource not found</CardTitle>

                <CardDescription>
                    This resource may have been removed or the link is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <BookX className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your resources list to continue managing your
                    career materials.
                </p>

                <Button asChild>
                    <Link href="/resources">Back to Resources</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
