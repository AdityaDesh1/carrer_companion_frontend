"use client";

import Logo from "./logo";
import SidebarToggle from "./toggle";

import { useSidebarStore } from "@/store/sidebar-store";
import { cn } from "@/lib/utils";
import SidebarNavigation from "./navigation";
import SidebarFooter from "./footer";

export default function Sidebar() {
    const isCollapsed = useSidebarStore(
        (state) => state.isCollapsed
    );

    return (
        <div className="relative">
            <aside
                className={cn(
                    "flex h-screen shrink-0 flex-col border-r bg-white transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-20" : "w-72"
                )}
            >
                {/* Logo */}
                <div className="border-b p-4">
                    <Logo collapsed={isCollapsed} />
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto">
                    <SidebarNavigation collapsed={isCollapsed} />
                </div>

                {/* Footer */}
                <SidebarFooter collapsed={isCollapsed} />
            </aside>

            <SidebarToggle />
        </div>
    );
}