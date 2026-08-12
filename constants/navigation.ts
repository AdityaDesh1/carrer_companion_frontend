import { NavigationItem } from "@/types/navigation";

import {
    LayoutDashboard,
    FolderKanban,
    BriefcaseBusiness,
    MessagesSquare,
    CircleHelp,
    FileText,
    BookOpen,
    NotebookPen,
    User,
    Settings,
} from "lucide-react";

export const navigation: NavigationItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Projects",
        href: "/projects",
        icon: FolderKanban,
    },
    {
        title: "Applications",
        href: "/applications",
        icon: BriefcaseBusiness,
    },
    {
        title: "Interviews",
        href: "/interviews",
        icon: MessagesSquare,
    },
    {
        title: "Interview Questions",
        href: "/interview-questions",
        icon: CircleHelp,
    },
    {
        title: "Resources",
        href: "/resources",
        icon: BookOpen,
    },
    {
        title: "Resumes",
        href: "/resumes",
        icon: FileText,
    },
    {
        title: "Notes",
        href: "/notes",
        icon: NotebookPen,
    },
];

export const bottomNavigation: NavigationItem[] = [
    {
        title: "Profile",
        href: "/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];