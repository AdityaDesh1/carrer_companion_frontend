"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { interviewQuestionService } from "@/services/interview-question.service";
import { UpdateInterviewQuestionDto } from "@/types/interview-question.types";

export function useUpdateInterviewQuestion(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateInterviewQuestionDto) =>
            interviewQuestionService.updateInterviewQuestion(id, data),

        onSuccess: (updatedQuestion) => {
            queryClient.invalidateQueries({
                queryKey: ["interview-questions"],
            });
            queryClient.invalidateQueries({
                queryKey: ["interview-question", id],
            });
            queryClient.setQueryData(
                ["interview-question", id],
                updatedQuestion
            );
        },
    });
}
