import { cn } from "@/lib/utils";
import {
    formatInterviewStatus,
    InterviewStatus,
} from "@/types/interview";

const STATUS_STYLES: Record<InterviewStatus, string> = {
    SCHEDULED: "bg-blue-50 text-blue-700 ring-blue-600/20",
    COMPLETED: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    CANCELLED: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

interface InterviewStatusBadgeProps {
    status: InterviewStatus;
    className?: string;
}

export default function InterviewStatusBadge({
    status,
    className,
}: InterviewStatusBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                STATUS_STYLES[status],
                className
            )}
        >
            {formatInterviewStatus(status)}
        </span>
    );
}
