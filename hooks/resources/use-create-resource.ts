"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resourceService } from "@/services/resource.service";

export function useCreateResource() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: resourceService.createResource,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["resources"],
            });
        },
    });
}
