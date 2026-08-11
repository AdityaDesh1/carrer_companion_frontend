import { api } from "@/lib/axios";
import {
    CreateResourceDto,
    Resource,
    UpdateResourceDto,
} from "@/types/resource.types";

export const resourceService = {
    async getResources() {
        const response = await api.get<Resource[]>("/resources");

        return response.data;
    },

    async getResource(id: string) {
        const response = await api.get<Resource>(`/resources/${id}`);

        return response.data;
    },

    async createResource(data: CreateResourceDto) {
        const response = await api.post<Resource>("/resources", data);

        return response.data;
    },

    async updateResource(id: string, data: UpdateResourceDto) {
        const response = await api.patch<Resource>(
            `/resources/${id}`,
            data
        );

        return response.data;
    },

    async deleteResource(id: string) {
        await api.delete(`/resources/${id}`);
    },
};
