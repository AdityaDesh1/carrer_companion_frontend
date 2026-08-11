import { api } from "@/lib/axios";
import {
    Application,
    CreateApplicationInput,
    GetApplicationsParams,
    UpdateApplicationInput,
} from "@/types/application";

export const applicationService = {
    async createApplication(data: CreateApplicationInput) {
        const response = await api.post<Application>("/applications", data);

        return response.data;
    },

    async getApplications(params?: GetApplicationsParams) {
        const response = await api.get<Application[]>("/applications", {
            params,
        });

        return response.data;
    },

    async getApplication(id: string) {
        const response = await api.get<Application>(`/applications/${id}`);

        return response.data;
    },

    async updateApplication(id: string, data: UpdateApplicationInput) {
        const response = await api.patch<Application>(
            `/applications/${id}`,
            data
        );

        return response.data;
    },

    async deleteApplication(id: string) {
        await api.delete(`/applications/${id}`);
    },
};
