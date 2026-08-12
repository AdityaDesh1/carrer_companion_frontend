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

export default function PageTitle() {
    const pathname = usePathname();

    const title = PAGE_TITLES[pathname] ?? "Career Companion";

    return (
        <h1 className="text-xl font-semibold text-slate-900">
            {title}
        </h1>
    );
}