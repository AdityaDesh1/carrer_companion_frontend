"use client";

import {
    BriefcaseBusiness,
    FileText,
    FolderKanban,
    MessagesSquare,
} from "lucide-react";

import {
    ApplicationPipeline,
    ApplicationPipelineSkeleton,
    DashboardErrorState,
    DashboardHeader,
    EmptyState,
    QuickActions,
    RecentActivity,
    StatCard,
    StatCardSkeleton,
} from "@/components/dashboard";
import { useDashboard } from "@/hooks/dashboard/use-dashboard";

export default function DashboardPage() {
    const {
        data: dashboard,
        isLoading,
        isError,
        refetch,
    } = useDashboard();

    return (
        <div className="space-y-8">
            <DashboardHeader />

            {isLoading && (
                <>
                    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <StatCardSkeleton key={index} />
                        ))}
                    </section>

                    <ApplicationPipelineSkeleton />
                </>
            )}

            {isError && (
                <DashboardErrorState onRetry={() => refetch()} />
            )}

            {!isLoading && !isError && dashboard && (
                <>
                    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        <StatCard
                            title="Applications"
                            value={dashboard.applications}
                            description="Total Applications"
                            icon={BriefcaseBusiness}
                            href="/applications"
                        />

                        <StatCard
                            title="Interviews"
                            value={dashboard.interviews}
                            description="Total Interviews"
                            icon={MessagesSquare}
                            href="/interviews"
                        />

                        <StatCard
                            title="Projects"
                            value={dashboard.projects}
                            description="Total Projects"
                            icon={FolderKanban}
                            href="/projects"
                        />

                        <StatCard
                            title="Resumes"
                            value={dashboard.resumes}
                            description="Total Resumes"
                            icon={FileText}
                            href="/resumes"
                        />
                    </section>

                    <ApplicationPipeline
                        stats={dashboard.applicationStats}
                    />
                </>
            )}

            <QuickActions />

            <RecentActivity />

            {!isLoading && !isError && dashboard?.projects === 0 && (
                <EmptyState />
            )}
        </div>
    );
}
