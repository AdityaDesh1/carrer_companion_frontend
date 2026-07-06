import { NavigationItem } from "@/types/navigation";

import {
    LayoutDashboard,
    FolderKanban,
    BriefcaseBusiness,
    MessagesSquare,
    FileText,
    BookOpen,
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
        title: "Resources",
        href: "/resources",
        icon: BookOpen,
    },
    {
        title: "Resume",
        href: "/resume",
        icon: FileText,
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