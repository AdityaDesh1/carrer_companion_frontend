"use client";

import { useQuery } from "@tanstack/react-query";

import { projectService } from "@/services/project.service";
import { GetProjectsParams } from "@/types/project";

export function useProjects(params?: GetProjectsParams) {
    return useQuery({
        queryKey: params ? ["projects", params] : ["projects"],
        queryFn: () => projectService.getProjects(params),
    });
}