"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resumeService } from "@/services/resume.service";

export function useCreateResume() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: resumeService.createResume,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["resumes"],
            });
        },
    });
}
