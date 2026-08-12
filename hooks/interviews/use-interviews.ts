"use client";

import { useQuery } from "@tanstack/react-query";

import { interviewService } from "@/services/interview.service";
import { GetInterviewsParams } from "@/types/interview";

export function useInterviews(params?: GetInterviewsParams) {
    return useQuery({
        queryKey: params ? ["interviews", params] : ["interviews"],
        queryFn: () => interviewService.getInterviews(params),
    });
}
