"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationItem } from "@/types/navigation";
import { useSidebarStore } from "@/store/sidebar-store";
import { cn } from "@/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                        "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                        isCollapsed ? "justify-center" : "gap-3",
                        isActive
                            ? "bg-slate-900 text-white shadow-sm"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                >
                    <Icon className="h-5 w-5 shrink-0" />

                    <span
                        className={cn(
                            "overflow-hidden whitespace-nowrap transition-all duration-300",
                            isCollapsed
                                ? "max-w-0 opacity-0"
                                : "max-w-[200px] opacity-100"
                        )}
                    >
                        {item.title}
                    </span>
                </Link>
            </TooltipTrigger>

            {isCollapsed && (
                <TooltipContent side="right">
                    <p>{item.title}</p>
                </TooltipContent>
            )}
        </Tooltip>
    );
}