"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { projectService } from "@/services/project.service";
import { ProjectFormValues } from "@/types/project";

export function useUpdateProject(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ProjectFormValues) =>
            projectService.updateProject(id, data),

        onSuccess: (updatedProject) => {
            queryClient.invalidateQueries({
                queryKey: ["projects"],
            });

            queryClient.invalidateQueries({
                queryKey: ["project", id],
            });

            queryClient.setQueryData(
                ["project", id],
                updatedProject
            );
        },
    });
}
