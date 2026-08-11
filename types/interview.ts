export type InterviewStatus = "SCHEDULED" | "COMPLETED" | "CANCELLED";

export const INTERVIEW_STATUSES: InterviewStatus[] = [
    "SCHEDULED",
    "COMPLETED",
    "CANCELLED",
];

export interface Interview {
    id: string;
    company: string;
    role: string;
    round: string;
    scheduledAt: string;
    status: InterviewStatus;
    notes?: string;
    feedback?: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateInterviewInput {
    company: string;
    role: string;
    round: string;
    scheduledAt: string;
    notes?: string;
    feedback?: string;
}

export interface UpdateInterviewInput {
    company?: string;
    role?: string;
    round?: string;
    scheduledAt?: string;
    status?: InterviewStatus;
    notes?: string;
    feedback?: string;
}

export interface GetInterviewsParams {
    status?: InterviewStatus;
    page?: number;
    limit?: number;
}

const INTERVIEW_STATUS_LABELS: Record<InterviewStatus, string> = {
    SCHEDULED: "Scheduled",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
};

export function formatInterviewStatus(status: InterviewStatus): string {
    return INTERVIEW_STATUS_LABELS[status];
}
