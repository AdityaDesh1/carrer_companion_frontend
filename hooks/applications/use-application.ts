"use client";

import { useQuery } from "@tanstack/react-query";

import { applicationService } from "@/services/application.service";

export function useApplication(id: string) {
    return useQuery({
        queryKey: ["application", id],
        queryFn: () => applicationService.getApplication(id),
        enabled: Boolean(id),
    });
}
