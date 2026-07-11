"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationItem } from "@/types/navigation";
import { cn } from "@/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarItemProps {
    item: NavigationItem;
    collapsed: boolean;
    onClick?: () => void;
}

export default function SidebarItem({
    item,
    collapsed,
    onClick,
}: SidebarItemProps) {
    const pathname = usePathname();

    const Icon = item.icon;

    const isActive = pathname === item.href;

    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                <Link
                    href={item.href}
                    onClick={onClick}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                        "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                        collapsed ? "justify-center" : "gap-3",
                        isActive
                            ? "bg-slate-900 text-white shadow-sm"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                >
                    <Icon className="h-5 w-5 shrink-0" />

                    <span
                        className={cn(
                            "overflow-hidden whitespace-nowrap transition-all duration-300",
                            collapsed
                                ? "max-w-0 opacity-0"
                                : "max-w-[200px] opacity-100"
                        )}
                    >
                        {item.title}
                    </span>
                </Link>
            </TooltipTrigger>

            {collapsed && (
                <TooltipContent side="right">
                    <p>{item.title}</p>
                </TooltipContent>
            )}
        </Tooltip>
    );
}