"use client";

import Link from "next/link";
import { FolderPlus } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function EmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Get Started</CardTitle>

                <CardDescription>
                    Welcome to Career Companion.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                <FolderPlus className="h-14 w-14 text-slate-400" />

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                        No projects yet
                    </h3>

                    <p className="max-w-md text-sm text-slate-500">
                        Create your first project to begin tracking applications,
                        interviews, resumes, and career resources.
                    </p>
                </div>

                <Button asChild>
                    <Link href="/projects/new">
                        Create Your First Project
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}