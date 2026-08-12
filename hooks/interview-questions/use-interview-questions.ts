"use client";

import { useQuery } from "@tanstack/react-query";

import { interviewQuestionService } from "@/services/interview-question.service";

export function useInterviewQuestions() {
    return useQuery({
        queryKey: ["interview-questions"],
        queryFn: interviewQuestionService.getInterviewQuestions,
    });
}
