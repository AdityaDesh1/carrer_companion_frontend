"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { applicationService } from "@/services/application.service";
import { ApplicationFormValues } from "@/schemas/application.schema";

export function useUpdateApplication(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ApplicationFormValues) =>
            applicationService.updateApplication(id, data),

        onSuccess: (updatedApplication) => {
            queryClient.invalidateQueries({
                queryKey: ["applications"],
            });

            queryClient.invalidateQueries({
                queryKey: ["application", id],
            });

            queryClient.setQueryData(
                ["application", id],
                updatedApplication
            );
        },
    });
}
