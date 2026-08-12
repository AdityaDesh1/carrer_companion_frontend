import { api } from "@/lib/axios";
import { DashboardResponse } from "@/types/dashboard.types";

export const dashboardService = {
    async getDashboard() {
        const response = await api.get<DashboardResponse>("/dashboard");
        return response.data;
    },
};
