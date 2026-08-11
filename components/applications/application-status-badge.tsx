import { cn } from "@/lib/utils";
import {
    ApplicationStatus,
    formatApplicationStatus,
} from "@/types/application";

const STATUS_STYLES: Record<ApplicationStatus, string> = {
    APPLIED: "bg-blue-50 text-blue-700 ring-blue-600/20",
    SCREENING: "bg-amber-50 text-amber-700 ring-amber-600/20",
    INTERVIEW_SCHEDULED: "bg-purple-50 text-purple-700 ring-purple-600/20",
    OFFER_RECEIVED: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    REJECTED: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

interface ApplicationStatusBadgeProps {
    status: ApplicationStatus;
    className?: string;
}

export default function ApplicationStatusBadge({
    status,
    className,
}: ApplicationStatusBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                STATUS_STYLES[status],
                className
            )}
        >
            {formatApplicationStatus(status)}
        </span>
    );
}
