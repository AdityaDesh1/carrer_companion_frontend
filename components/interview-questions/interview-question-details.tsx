"use client";

import { Building2, CalendarDays, Tag } from "lucide-react";

import InterviewQuestionDifficultyBadge from "./interview-question-difficulty-badge";
import { formatDate } from "@/lib/format-date";
import { InterviewQuestion } from "@/types/interview-question.types";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InterviewQuestionDetailsProps {
    interviewQuestion: InterviewQuestion;
}

export default function InterviewQuestionDetails({
    interviewQuestion,
}: InterviewQuestionDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-2xl leading-snug">
                            {interviewQuestion.question}
                        </CardTitle>

                        <CardDescription>
                            Interview question details
                        </CardDescription>
                    </div>

                    <InterviewQuestionDifficultyBadge
                        difficulty={interviewQuestion.difficulty}
                    />
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-sm font-medium text-slate-900">
                        Answer
                    </h2>

                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                        {interviewQuestion.answer || "No answer added yet."}
                    </p>
                </div>

                <Separator />

                <dl className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Tag className="h-3.5 w-3.5" />
                            Topic
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {interviewQuestion.topic}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <Building2 className="h-3.5 w-3.5" />
                            Company
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {interviewQuestion.company || "Not specified"}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Created
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(interviewQuestion.createdAt)}
                        </dd>
                    </div>

                    <div className="space-y-1">
                        <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Last Updated
                        </dt>

                        <dd className="text-sm text-slate-900">
                            {formatDate(interviewQuestion.updatedAt)}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
}
