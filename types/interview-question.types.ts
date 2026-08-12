export enum Difficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD",
}

export const DIFFICULTIES: Difficulty[] = [
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD,
];

export interface InterviewQuestion {
    id: string;
    question: string;
    answer?: string;
    topic: string;
    difficulty: Difficulty;
    company?: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateInterviewQuestionDto {
    question: string;
    answer?: string;
    topic: string;
    difficulty: Difficulty;
    company?: string;
}

export interface UpdateInterviewQuestionDto {
    question?: string;
    answer?: string;
    topic?: string;
    difficulty?: Difficulty;
    company?: string;
}

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
    [Difficulty.EASY]: "Easy",
    [Difficulty.MEDIUM]: "Medium",
    [Difficulty.HARD]: "Hard",
};

export function formatDifficulty(difficulty: Difficulty): string {
    return DIFFICULTY_LABELS[difficulty];
}
