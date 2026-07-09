"use client";

import Logo from "./logo";
import SidebarItem from "./item";
import SidebarToggle from "./toggle";
import { useSidebarStore } from "@/store/sidebar-store";
import { cn } from "@/lib/utils";


import {
    navigation,
    bottomNavigation,
} from "@/constants/navigation";


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
                    <Logo />
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    ...
                </nav>

                {/* Footer */}
                <div className="border-t p-4 space-y-2">
                    ...
                </div>
            </aside>

            <SidebarToggle />
        </div>
    );
}