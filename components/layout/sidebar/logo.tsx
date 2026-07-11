"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
    collapsed: boolean;
}

export default function Logo({
    collapsed,
}: LogoProps) {
    return (
        <Link
            href="/dashboard"
            className={cn(
                "flex items-center",
                collapsed ? "justify-center" : "gap-3"
            )}
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-bold text-white">
                CC
            </div>

            <div
                className={cn(
                    "overflow-hidden whitespace-nowrap transition-all duration-300",
                    collapsed
                        ? "w-0 opacity-0"
                        : "w-auto opacity-100"
                )}
            >
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                        Career Companion
                    </p>

                    <p className="truncate text-xs text-slate-500">
                        Career Management
                    </p>
                </div>
            </div>
        </Link>
    );
}