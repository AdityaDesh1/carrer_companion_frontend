import { api } from "@/lib/axios";
import {
    CreateResumeDto,
    Resume,
    UpdateResumeDto,
} from "@/types/resume.types";

export const resumeService = {
    async getResumes() {
        const response = await api.get<Resume[]>("/resumes");
        return response.data;
    },

    async getResume(id: string) {
        const response = await api.get<Resume>(`/resumes/${id}`);
        return response.data;
    },

    async createResume(data: CreateResumeDto) {
        const response = await api.post<Resume>("/resumes", data);
        return response.data;
    },

    async updateResume(id: string, data: UpdateResumeDto) {
        const response = await api.patch<Resume>(`/resumes/${id}`, data);
        return response.data;
    },

    async deleteResume(id: string) {
        await api.delete(`/resumes/${id}`);
    },
};
