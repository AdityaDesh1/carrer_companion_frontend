import { api } from "@/lib/axios";
import {
    CreateInterviewInput,
    GetInterviewsParams,
    Interview,
    UpdateInterviewInput,
} from "@/types/interview";

export const interviewService = {
    async createInterview(data: CreateInterviewInput) {
        const response = await api.post<Interview>("/interviews", data);

        return response.data;
    },

    async getInterviews(params?: GetInterviewsParams) {
        const response = await api.get<Interview[]>("/interviews", {
            params,
        });

        return response.data;
    },

    async getInterview(id: string) {
        const response = await api.get<Interview>(`/interviews/${id}`);

        return response.data;
    },

    async updateInterview(id: string, data: UpdateInterviewInput) {
        const response = await api.patch<Interview>(
            `/interviews/${id}`,
            data
        );

        return response.data;
    },

    async deleteInterview(id: string) {
        await api.delete(`/interviews/${id}`);
    },
};
