"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resumeService } from "@/services/resume.service";
import { UpdateResumeDto } from "@/types/resume.types";

export function useUpdateResume(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateResumeDto) =>
            resumeService.updateResume(id, data),

        onSuccess: (updatedResume) => {
            queryClient.invalidateQueries({
                queryKey: ["resumes"],
            });
            queryClient.invalidateQueries({
                queryKey: ["resume", id],
            });
            queryClient.setQueryData(["resume", id], updatedResume);
        },
    });
}
