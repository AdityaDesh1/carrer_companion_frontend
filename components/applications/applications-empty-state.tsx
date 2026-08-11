import Link from "next/link";
import { BriefcaseBusiness, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ApplicationsEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>No applications yet</CardTitle>

                <CardDescription>
                    Start tracking your job applications.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <BriefcaseBusiness className="h-14 w-14 text-slate-400" />

                <p className="max-w-md text-sm text-slate-500">
                    Keep every application organized in one place — from first
                    apply to final offer.
                </p>

                <Button asChild>
                    <Link href="/applications/new">
                        <Plus className="h-4 w-4" />
                        Add Application
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
