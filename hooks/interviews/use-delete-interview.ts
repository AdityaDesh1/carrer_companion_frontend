"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { interviewService } from "@/services/interview.service";

export function useDeleteInterview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => interviewService.deleteInterview(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["interviews"],
            });

            queryClient.removeQueries({
                queryKey: ["interview", id],
            });
        },
    });
}
