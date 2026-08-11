"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InterviewFormValues } from "@/schemas/interview.schema";
import { interviewService } from "@/services/interview.service";
import { fromDatetimeLocalValue } from "@/lib/format-datetime";

function toUpdatePayload(data: InterviewFormValues) {
    return {
        ...data,
        scheduledAt: fromDatetimeLocalValue(data.scheduledAt),
    };
}

export function useUpdateInterview(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: InterviewFormValues) =>
            interviewService.updateInterview(id, toUpdatePayload(data)),

        onSuccess: (updatedInterview) => {
            queryClient.invalidateQueries({
                queryKey: ["interviews"],
            });

            queryClient.invalidateQueries({
                queryKey: ["interview", id],
            });

            queryClient.setQueryData(
                ["interview", id],
                updatedInterview
            );
        },
    });
}
