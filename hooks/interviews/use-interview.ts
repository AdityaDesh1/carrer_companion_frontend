"use client";

import { useQuery } from "@tanstack/react-query";

import { interviewService } from "@/services/interview.service";

export function useInterview(id: string) {
    return useQuery({
        queryKey: ["interview", id],
        queryFn: () => interviewService.getInterview(id),
        enabled: Boolean(id),
    });
}
