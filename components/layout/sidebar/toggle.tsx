"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";

export default function SidebarToggle() {
    const isCollapsed = useSidebarStore(
        (state) => state.isCollapsed
    );

    const toggleCollapse = useSidebarStore(
        (state) => state.toggleCollapse
    );

    return (
        <button
            type="button"
            onClick={toggleCollapse}
            aria-label={
                isCollapsed
                    ? "Expand Sidebar"
                    : "Collapse Sidebar"
            }
            className={cn(
                "absolute top-8 -right-4 z-50",
                "flex h-8 w-8 items-center justify-center",
                "rounded-full border border-slate-200",
                "bg-white shadow-md",
                "transition-all duration-300",
                "hover:scale-105 hover:bg-slate-100"
            )}
        >
            {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
            ) : (
                <ChevronLeft className="h-4 w-4" />
            )}
        </button>
    );
}