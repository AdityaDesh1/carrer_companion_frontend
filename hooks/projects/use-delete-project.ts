"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { projectService } from "@/services/project.service";

export function useDeleteProject() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => projectService.deleteProject(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["projects"],
            });

            queryClient.removeQueries({
                queryKey: ["project", id],
            });
        },
    });
}
