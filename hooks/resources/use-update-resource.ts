"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resourceService } from "@/services/resource.service";
import { UpdateResourceDto } from "@/types/resource.types";

export function useUpdateResource(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateResourceDto) =>
            resourceService.updateResource(id, data),

        onSuccess: (updatedResource) => {
            queryClient.invalidateQueries({
                queryKey: ["resources"],
            });

            queryClient.invalidateQueries({
                queryKey: ["resource", id],
            });

            queryClient.setQueryData(
                ["resource", id],
                updatedResource
            );
        },
    });
}
