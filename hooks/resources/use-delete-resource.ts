"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resourceService } from "@/services/resource.service";

export function useDeleteResource() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => resourceService.deleteResource(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["resources"],
            });

            queryClient.removeQueries({
                queryKey: ["resource", id],
            });
        },
    });
}
