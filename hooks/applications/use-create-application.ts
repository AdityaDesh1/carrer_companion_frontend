"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { applicationService } from "@/services/application.service";

export function useCreateApplication() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: applicationService.createApplication,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["applications"],
            });
        },
    });
}
