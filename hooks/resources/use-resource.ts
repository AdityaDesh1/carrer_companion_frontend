"use client";

import { useQuery } from "@tanstack/react-query";

import { resourceService } from "@/services/resource.service";

export function useResource(id: string) {
    return useQuery({
        queryKey: ["resource", id],
        queryFn: () => resourceService.getResource(id),
        enabled: Boolean(id),
    });
}
