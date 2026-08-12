"use client";

import { useQuery } from "@tanstack/react-query";

import { resumeService } from "@/services/resume.service";

export function useResume(id: string) {
    return useQuery({
        queryKey: ["resume", id],
        queryFn: () => resumeService.getResume(id),
        enabled: Boolean(id),
    });
}
