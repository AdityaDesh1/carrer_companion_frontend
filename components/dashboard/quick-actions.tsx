"use client";

import Link from "next/link";
import {
    BriefcaseBusiness,
    FileText,
    FolderKanban,
    MessagesSquare,
    NotebookPen,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const actions = [
    {
        title: "Add Project",
        href: "/projects/new",
        icon: FolderKanban,
    },
    {
        title: "Add Application",
        href: "/applications/new",
        icon: BriefcaseBusiness,
    },
    {
        title: "Add Interview",
        href: "/interviews/new",
        icon: MessagesSquare,
    },
    {
        title: "Add Resume",
        href: "/resumes/new",
        icon: FileText,
    },
    {
        title: "Add Note",
        href: "/notes/new",
        icon: NotebookPen,
    },
];

export default function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-slate-50"
                        >
                            <Icon className="h-5 w-5 text-slate-600" />

                            <span className="font-medium">
                                {action.title}
                            </span>
                        </Link>
                    );
                })}
            </CardContent>
        </Card>
    );
}
