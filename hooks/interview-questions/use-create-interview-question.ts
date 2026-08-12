"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { interviewQuestionService } from "@/services/interview-question.service";

export function useCreateInterviewQuestion() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: interviewQuestionService.createInterviewQuestion,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["interview-questions"],
            });
        },
    });
}
