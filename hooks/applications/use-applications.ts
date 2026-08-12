"use client";

import { useQuery } from "@tanstack/react-query";

import { applicationService } from "@/services/application.service";
import { GetApplicationsParams } from "@/types/application";

export function useApplications(params?: GetApplicationsParams) {
    return useQuery({
        queryKey: params ? ["applications", params] : ["applications"],
        queryFn: () => applicationService.getApplications(params),
    });
}
