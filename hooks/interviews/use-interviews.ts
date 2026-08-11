"use client";

import { useQuery } from "@tanstack/react-query";

import { interviewService } from "@/services/interview.service";

export function useInterviews() {
    return useQuery({
        queryKey: ["interviews"],
        queryFn: () => interviewService.getInterviews(),
    });
}
