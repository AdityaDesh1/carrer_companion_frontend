import { z } from "zod";

const interviewStatusValues = [
    "SCHEDULED",
    "COMPLETED",
    "CANCELLED",
] as const;

export const interviewSchema = z.object({
    company: z
        .string()
        .min(1, "Company is required")
        .max(100),

    role: z
        .string()
        .min(1, "Role is required")
        .max(100),

    round: z
        .string()
        .min(1, "Round is required")
        .max(100),

    scheduledAt: z
        .string()
        .min(1, "Scheduled date and time is required"),

    status: z.enum(interviewStatusValues),

    notes: z
        .string()
        .max(1000)
        .optional(),

    feedback: z
        .string()
        .max(2000)
        .optional(),
});

export type InterviewFormValues = z.infer<typeof interviewSchema>;
