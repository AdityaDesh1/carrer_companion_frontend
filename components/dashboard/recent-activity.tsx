"use client";

import ApplicationStatusBadge from "@/components/applications/application-status-badge";
import InterviewStatusBadge from "@/components/interviews/interview-status-badge";
import RecentActivityItem from "@/components/dashboard/recent-activity-item";
import RecentActivitySection from "@/components/dashboard/recent-activity-section";
import { useApplications } from "@/hooks/applications/use-applications";
import { useInterviews } from "@/hooks/interviews/use-interviews";
import { useNotes } from "@/hooks/notes/use-notes";
import { useProjects } from "@/hooks/projects/use-projects";
import { formatDateTime } from "@/lib/format-datetime";
import { formatRelativeDate } from "@/lib/format-date";
import { Application } from "@/types/application";
import { Interview } from "@/types/interview";
import { Note } from "@/types/note.types";
import { Project } from "@/types/project";

const RECENT_QUERY_PARAMS = {
    page: 1,
    limit: 3,
};

function sortRecent<T>(
    items: T[] | undefined,
    getTimestamp: (item: T) => string,
    limit = 3
): T[] {
    if (!items?.length) {
        return [];
    }

    return [...items]
        .sort(
            (a, b) =>
                new Date(getTimestamp(b)).getTime() -
                new Date(getTimestamp(a)).getTime()
        )
        .slice(0, limit);
}

export default function RecentActivity() {
    const applicationsQuery = useApplications(RECENT_QUERY_PARAMS);
    const projectsQuery = useProjects(RECENT_QUERY_PARAMS);
    const notesQuery = useNotes(RECENT_QUERY_PARAMS);
    const interviewsQuery = useInterviews(RECENT_QUERY_PARAMS);

    const recentApplications = sortRecent<Application>(
        applicationsQuery.data,
        (application) => application.appliedAt
    );

    const recentProjects = sortRecent<Project>(
        projectsQuery.data,
        (project) => project.updatedAt
    );

    const recentNotes = sortRecent<Note>(
        notesQuery.data,
        (note) => note.updatedAt
    );

    const recentInterviews = sortRecent<Interview>(
        interviewsQuery.data,
        (interview) => interview.createdAt
    );

    return (
        <section className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold text-slate-900">
                    Recent Activity
                </h2>

                <p className="text-sm text-slate-500">
                    Quickly pick up where you left off
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <RecentActivitySection
                    title="Recent Applications"
                    viewAllHref="/applications"
                    viewAllLabel="View Applications"
                    emptyMessage="No recent applications"
                    isLoading={applicationsQuery.isLoading}
                    isError={applicationsQuery.isError}
                    onRetry={() => applicationsQuery.refetch()}
                >
                    {recentApplications.map((application) => (
                        <RecentActivityItem
                            key={application.id}
                            href={`/applications/${application.id}`}
                        >
                            <div className="space-y-2">
                                <div>
                                    <p className="font-medium text-slate-900">
                                        {application.company}
                                    </p>

                                    <p className="text-sm text-slate-600">
                                        {application.role}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <ApplicationStatusBadge
                                        status={application.status}
                                    />

                                    <span className="text-xs text-slate-500">
                                        {formatRelativeDate(
                                            application.appliedAt
                                        )}
                                    </span>
                                </div>
                            </div>
                        </RecentActivityItem>
                    ))}
                </RecentActivitySection>

                <RecentActivitySection
                    title="Recent Projects"
                    viewAllHref="/projects"
                    viewAllLabel="View Projects"
                    emptyMessage="No recent projects"
                    isLoading={projectsQuery.isLoading}
                    isError={projectsQuery.isError}
                    onRetry={() => projectsQuery.refetch()}
                >
                    {recentProjects.map((project) => (
                        <RecentActivityItem
                            key={project.id}
                            href={`/projects/${project.id}`}
                        >
                            <div className="space-y-1">
                                <p className="font-medium text-slate-900">
                                    {project.title}
                                </p>

                                {project.description && (
                                    <p className="line-clamp-1 text-sm text-slate-600">
                                        {project.description}
                                    </p>
                                )}

                                <p className="text-xs text-slate-500">
                                    Updated{" "}
                                    {formatRelativeDate(project.updatedAt)}
                                </p>
                            </div>
                        </RecentActivityItem>
                    ))}
                </RecentActivitySection>

                <RecentActivitySection
                    title="Recent Notes"
                    viewAllHref="/notes"
                    viewAllLabel="View Notes"
                    emptyMessage="No recent notes"
                    isLoading={notesQuery.isLoading}
                    isError={notesQuery.isError}
                    onRetry={() => notesQuery.refetch()}
                >
                    {recentNotes.map((note) => (
                        <RecentActivityItem
                            key={note.id}
                            href={`/notes/${note.id}`}
                        >
                            <div className="space-y-1">
                                <p className="font-medium text-slate-900">
                                    {note.title}
                                </p>

                                <p className="line-clamp-1 text-sm text-slate-600">
                                    {note.content}
                                </p>

                                <p className="text-xs text-slate-500">
                                    Updated{" "}
                                    {formatRelativeDate(note.updatedAt)}
                                </p>
                            </div>
                        </RecentActivityItem>
                    ))}
                </RecentActivitySection>

                <RecentActivitySection
                    title="Recent Interviews"
                    viewAllHref="/interviews"
                    viewAllLabel="View Interviews"
                    emptyMessage="No upcoming interviews"
                    isLoading={interviewsQuery.isLoading}
                    isError={interviewsQuery.isError}
                    onRetry={() => interviewsQuery.refetch()}
                >
                    {recentInterviews.map((interview) => (
                        <RecentActivityItem
                            key={interview.id}
                            href={`/interviews/${interview.id}`}
                        >
                            <div className="space-y-2">
                                <div>
                                    <p className="font-medium text-slate-900">
                                        {interview.company}
                                    </p>

                                    <p className="text-sm text-slate-600">
                                        {interview.role}
                                        {interview.round
                                            ? ` · ${interview.round}`
                                            : ""}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <InterviewStatusBadge
                                        status={interview.status}
                                    />

                                    <span className="text-xs text-slate-500">
                                        {formatDateTime(
                                            interview.scheduledAt
                                        )}
                                    </span>
                                </div>
                            </div>
                        </RecentActivityItem>
                    ))}
                </RecentActivitySection>
            </div>
        </section>
    );
}
