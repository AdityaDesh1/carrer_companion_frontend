export interface ApplicationStats {
    applied: number;
    screening: number;
    interviewScheduled: number;
    offerReceived: number;
    rejected: number;
}

export interface DashboardStats {
    projects: number;
    resumes: number;
    applications: number;
    interviews: number;
    notes: number;
    resources: number;
    interviewQuestions: number;
}

export interface DashboardResponse extends DashboardStats {
    applicationStats: ApplicationStats;
}
