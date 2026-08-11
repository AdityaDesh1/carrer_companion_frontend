"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { applicationService } from "@/services/application.service";

export function useDeleteApplication() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => applicationService.deleteApplication(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["applications"],
            });

            queryClient.removeQueries({
                queryKey: ["application", id],
            });
        },
    });
}
