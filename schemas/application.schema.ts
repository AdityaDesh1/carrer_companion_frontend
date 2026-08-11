import { z } from "zod";

const applicationStatusValues = [
    "APPLIED",
    "SCREENING",
    "INTERVIEW_SCHEDULED",
    "OFFER_RECEIVED",
    "REJECTED",
] as const;

export const applicationSchema = z.object({
    company: z
        .string()
        .min(1, "Company is required")
        .max(100),

    role: z
        .string()
        .min(1, "Role is required")
        .max(100),

    status: z.enum(applicationStatusValues),

    notes: z
        .string()
        .max(1000)
        .optional(),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
