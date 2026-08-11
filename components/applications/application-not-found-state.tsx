import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ApplicationNotFoundState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Application not found</CardTitle>

                <CardDescription>
                    This application may have been removed or the link is invalid.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <BriefcaseBusiness className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Return to your applications list to continue tracking your job
                    search.
                </p>

                <Button asChild>
                    <Link href="/applications">Back to Applications</Link>
                </Button>
            </CardContent>
        </Card>
    );
}
