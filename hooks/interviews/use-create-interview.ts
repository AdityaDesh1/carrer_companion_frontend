"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InterviewFormValues } from "@/schemas/interview.schema";
import { interviewService } from "@/services/interview.service";
import { CreateInterviewInput } from "@/types/interview";
import { fromDatetimeLocalValue } from "@/lib/format-datetime";

function toCreatePayload(data: InterviewFormValues): CreateInterviewInput {
    const { scheduledAt, company, role, round, notes, feedback } = data;

    return {
        company,
        role,
        round,
        scheduledAt: fromDatetimeLocalValue(scheduledAt),
        ...(notes ? { notes } : {}),
        ...(feedback ? { feedback } : {}),
    };
}

export function useCreateInterview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: InterviewFormValues) =>
            interviewService.createInterview(toCreatePayload(data)),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["interviews"],
            });
        },
    });
}
