"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { interviewQuestionService } from "@/services/interview-question.service";

export function useDeleteInterviewQuestion() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            interviewQuestionService.deleteInterviewQuestion(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["interview-questions"],
            });
            queryClient.removeQueries({
                queryKey: ["interview-question", id],
            });
        },
    });
}
