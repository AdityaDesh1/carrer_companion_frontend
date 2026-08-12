import { cn } from "@/lib/utils";
import {
    Difficulty,
    formatDifficulty,
} from "@/types/interview-question.types";

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
    [Difficulty.EASY]: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    [Difficulty.MEDIUM]: "bg-amber-50 text-amber-700 ring-amber-600/20",
    [Difficulty.HARD]: "bg-red-50 text-red-700 ring-red-600/20",
};

interface InterviewQuestionDifficultyBadgeProps {
    difficulty: Difficulty;
    className?: string;
}

export default function InterviewQuestionDifficultyBadge({
    difficulty,
    className,
}: InterviewQuestionDifficultyBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                DIFFICULTY_STYLES[difficulty],
                className
            )}
        >
            {formatDifficulty(difficulty)}
        </span>
    );
}
