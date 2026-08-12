"use client";

import Link from "next/link";
import { Building2, CalendarDays, Eye, Tag } from "lucide-react";

import InterviewQuestionDifficultyBadge from "./interview-question-difficulty-badge";
import { formatDate } from "@/lib/format-date";
import { InterviewQuestion } from "@/types/interview-question.types";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface InterviewQuestionCardProps {
    interviewQuestion: InterviewQuestion;
}

export default function InterviewQuestionCard({
    interviewQuestion,
}: InterviewQuestionCardProps) {
    return (
        <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
            <CardHeader className="gap-3">
                <div className="flex items-start justify-between gap-3">
                    <CardTitle className="line-clamp-3 text-base leading-snug">
                        <Link
                            href={`/interview-questions/${interviewQuestion.id}`}
                            className="transition-colors hover:text-primary"
                        >
                            {interviewQuestion.question}
                        </Link>
                    </CardTitle>

                    <InterviewQuestionDifficultyBadge
                        difficulty={interviewQuestion.difficulty}
                    />
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Tag className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="line-clamp-1">{interviewQuestion.topic}</span>
                </div>

                {interviewQuestion.company && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Building2 className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span className="line-clamp-1">
                            {interviewQuestion.company}
                        </span>
                    </div>
                )}

                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Created {formatDate(interviewQuestion.createdAt)}</span>
                </div>
            </CardContent>

            <CardFooter>
                <Button asChild variant="outline" size="sm">
                    <Link href={`/interview-questions/${interviewQuestion.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
