import { z } from "zod";

import { ResourceType } from "@/types/resource.types";

const resourceTypeValues = [
    ResourceType.ARTICLE,
    ResourceType.VIDEO,
    ResourceType.COURSE,
    ResourceType.DOCUMENTATION,
    ResourceType.GITHUB,
    ResourceType.OTHER,
] as const;

export const resourceSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(100),

    type: z.enum(resourceTypeValues),

    url: z
        .string()
        .min(1, "URL is required")
        .url("Please enter a valid URL"),

    description: z
        .string()
        .max(500)
        .optional(),
});

export type ResourceFormValues = z.infer<typeof resourceSchema>;
