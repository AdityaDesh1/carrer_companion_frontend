import { z } from "zod";
import { projectSchema } from "@/schemas/project.schema";

export interface Project {
    id: string;
    title: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export interface GetProjectsParams {
    page?: number;
    limit?: number;
}

export type ProjectFormValues = z.infer<
    typeof projectSchema
>;