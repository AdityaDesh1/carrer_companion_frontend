export type ApplicationStatus =
    | "APPLIED"
    | "SCREENING"
    | "INTERVIEW_SCHEDULED"
    | "OFFER_RECEIVED"
    | "REJECTED";

export const APPLICATION_STATUSES: ApplicationStatus[] = [
    "APPLIED",
    "SCREENING",
    "INTERVIEW_SCHEDULED",
    "OFFER_RECEIVED",
    "REJECTED",
];

export interface Application {
    id: string;
    company: string;
    role: string;
    status: ApplicationStatus;
    appliedAt: string;
    notes?: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateApplicationInput {
    company: string;
    role: string;
    status?: ApplicationStatus;
    notes?: string;
}

export interface UpdateApplicationInput {
    company?: string;
    role?: string;
    status?: ApplicationStatus;
    notes?: string;
}

export interface GetApplicationsParams {
    status?: ApplicationStatus;
    page?: number;
    limit?: number;
}

const APPLICATION_STATUS_LABELS: Record<ApplicationStatus, string> = {
    APPLIED: "Applied",
    SCREENING: "Screening",
    INTERVIEW_SCHEDULED: "Interview Scheduled",
    OFFER_RECEIVED: "Offer Received",
    REJECTED: "Rejected",
};

export function formatApplicationStatus(status: ApplicationStatus): string {
    return APPLICATION_STATUS_LABELS[status];
}
