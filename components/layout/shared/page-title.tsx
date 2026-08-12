"use client";

import { usePathname } from "next/navigation";

const PAGE_TITLES: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/projects": "Projects",
    "/applications": "Applications",
    "/interviews": "Interviews",
    "/interview-questions": "Interview Questions",
    "/resources": "Resources",
    "/resumes": "Resumes",
    "/notes": "Notes",
    "/profile": "Profile",
    "/settings": "Settings",
};

const NESTED_ROUTE_TITLES: { prefix: string; title: string }[] = [
    { prefix: "/interview-questions", title: "Interview Questions" },
    { prefix: "/dashboard", title: "Dashboard" },
    { prefix: "/projects", title: "Projects" },
    { prefix: "/applications", title: "Applications" },
    { prefix: "/interviews", title: "Interviews" },
    { prefix: "/resources", title: "Resources" },
    { prefix: "/resumes", title: "Resumes" },
    { prefix: "/notes", title: "Notes" },
    { prefix: "/profile", title: "Profile" },
    { prefix: "/settings", title: "Settings" },
];

function getPageTitle(pathname: string): string {
    if (PAGE_TITLES[pathname]) {
        return PAGE_TITLES[pathname];
    }

    for (const { prefix, title } of NESTED_ROUTE_TITLES) {
        if (pathname.startsWith(`${prefix}/`)) {
            return title;
        }
    }

    return "Career Companion";
}

export default function PageTitle() {
    const pathname = usePathname();
    const title = getPageTitle(pathname);

    return (
        <h1 className="text-xl font-semibold text-slate-900">
            {title}
        </h1>
    );
}
