"use client";

import {
    BookOpen,
    BriefcaseBusiness,
    FolderKanban,
    MessagesSquare,
} from "lucide-react";

import {
    DashboardHeader,
    EmptyState,
    QuickActions,
    StatCard,
} from "@/components/dashboard";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <DashboardHeader />

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Projects"
                    value={0}
                    description="Total Projects"
                    icon={FolderKanban}
                />

                <StatCard
                    title="Applications"
                    value={0}
                    description="Total Applications"
                    icon={BriefcaseBusiness}
                />

                <StatCard
                    title="Interviews"
                    value={0}
                    description="Upcoming Interviews"
                    icon={MessagesSquare}
                />

                <StatCard
                    title="Resources"
                    value={0}
                    description="Saved Resources"
                    icon={BookOpen}
                />
            </section>

            <QuickActions />
            <EmptyState />
        </div>
    );
}