"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationItem } from "@/types/navigation";
import { useSidebarStore } from "@/store/sidebar-store";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    item: NavigationItem;
}

export default function SidebarItem({
    item,
}: SidebarItemProps) {
    const pathname = usePathname();

    const Icon = item.icon;

    const isActive = pathname === item.href;

    const isCollapsed = useSidebarStore(
        (state) => state.isCollapsed
    );

    return (
        <Link
            href={item.href}
            className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${isCollapsed ? "justify-center" : "gap-3"
                } ${isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
        >
            <Icon className="h-5 w-5" />

            <span
                className={cn(
                    "overflow-hidden whitespace-nowrap transition-all duration-300",
                    isCollapsed
                        ? "w-0 opacity-0"
                        : "w-auto opacity-100"
                )}
            >
                {item.title}
            </span>
        </Link>
    );
}