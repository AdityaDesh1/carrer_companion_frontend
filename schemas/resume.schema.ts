import { z } from "zod";

export const resumeSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(100),

    summary: z
        .string()
        .max(2000)
        .optional(),
});

export type ResumeFormValues = z.infer<typeof resumeSchema>;
