"use client";

import { useQuery } from "@tanstack/react-query";

import { projectService } from "@/services/project.service";

export function useProject(id: string) {
    return useQuery({
        queryKey: ["project", id],
        queryFn: () => projectService.getProject(id),
        enabled: Boolean(id),
    });
}
