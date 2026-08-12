"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resumeService } from "@/services/resume.service";

export function useDeleteResume() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => resumeService.deleteResume(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["resumes"],
            });
            queryClient.removeQueries({
                queryKey: ["resume", id],
            });
        },
    });
}
