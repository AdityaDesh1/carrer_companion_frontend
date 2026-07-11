"use client";

import { Menu } from "lucide-react";

import { useSidebarStore } from "@/store/sidebar-store";

export default function MobileToggle() {
    const openMobile = useSidebarStore(
        (state) => state.openMobile
    );

    return (
        <button
            type="button"
            onClick={openMobile}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Open navigation menu"
        >
            <Menu className="h-5 w-5" />
        </button>
    );
}