"use client";

import { useQuery } from "@tanstack/react-query";

import { interviewQuestionService } from "@/services/interview-question.service";

export function useInterviewQuestion(id: string) {
    return useQuery({
        queryKey: ["interview-question", id],
        queryFn: () => interviewQuestionService.getInterviewQuestion(id),
        enabled: Boolean(id),
    });
}
