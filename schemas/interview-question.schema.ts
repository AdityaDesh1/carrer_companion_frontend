import { z } from "zod";

import { Difficulty } from "@/types/interview-question.types";

const difficultyValues = [
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD,
] as const;

export const interviewQuestionSchema = z.object({
    question: z
        .string()
        .min(1, "Question is required")
        .max(2000),

    answer: z
        .string()
        .max(10000)
        .optional(),

    topic: z
        .string()
        .min(1, "Topic is required")
        .max(100),

    difficulty: z.enum(difficultyValues),

    company: z
        .string()
        .max(100)
        .optional(),
});

export type InterviewQuestionFormValues = z.infer<
    typeof interviewQuestionSchema
>;
