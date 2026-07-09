"use client";

import { Bell } from "lucide-react";

export default function NavbarActions() {
    return (
        <div className="flex items-center gap-3">
            <button
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-slate-100"
                aria-label="Notifications"
            >
                <Bell className="h-5 w-5" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                A
            </div>
        </div>
    );
}