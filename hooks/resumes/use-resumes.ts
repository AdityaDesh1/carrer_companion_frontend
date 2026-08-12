"use client";

import { useQuery } from "@tanstack/react-query";

import { resumeService } from "@/services/resume.service";

export function useResumes() {
    return useQuery({
        queryKey: ["resumes"],
        queryFn: resumeService.getResumes,
    });
}
