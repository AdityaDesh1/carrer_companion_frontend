import { api } from "@/lib/axios";
import { Project, ProjectFormValues } from "@/types/project";

export const projectService = {
    async getProjects() {
        const response = await api.get<Project[]>("/projects");

        return response.data;
    },

    async getProject(id: string) {
        const response = await api.get<Project>(
            `/projects/${id}`
        );

        return response.data;
    },

    async createProject(data: ProjectFormValues) {
        const response = await api.post<Project>(
            "/projects",
            data
        );

        return response.data;
    },

    async updateProject(
        id: string,
        data: ProjectFormValues
    ) {
        const response = await api.patch<Project>(
            `/projects/${id}`,
            data
        );

        return response.data;
    },

    async deleteProject(id: string) {
        await api.delete(`/projects/${id}`);
    },
};