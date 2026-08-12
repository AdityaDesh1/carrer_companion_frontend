"use client";

import Link from "next/link";
import { CalendarDays, Eye } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { Resume } from "@/types/resume.types";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ResumeCardProps {
    resume: Resume;
}

export default function ResumeCard({ resume }: ResumeCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader>
                <CardTitle className="line-clamp-2">
                    <Link
                        href={`/resumes/${resume.id}`}
                        className="transition-colors hover:text-primary"
                    >
                        {resume.title}
                    </Link>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <CardDescription className="line-clamp-3 text-sm">
                    {resume.summary || "No summary provided."}
                </CardDescription>

                <div className="mt-auto space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>Created {formatDate(resume.createdAt)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>Updated {formatDate(resume.updatedAt)}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/resumes/${resume.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
