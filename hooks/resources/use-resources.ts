"use client";

import { useQuery } from "@tanstack/react-query";

import { resourceService } from "@/services/resource.service";

export function useResources() {
    return useQuery({
        queryKey: ["resources"],
        queryFn: resourceService.getResources,
    });
}
