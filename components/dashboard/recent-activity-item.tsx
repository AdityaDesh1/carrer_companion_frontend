import Link from "next/link";

import { cn } from "@/lib/utils";

interface RecentActivityItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function RecentActivityItem({
    href,
    children,
    className,
}: RecentActivityItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "block rounded-lg border p-3 transition-colors hover:bg-slate-50",
                className
            )}
        >
            {children}
        </Link>
    );
}
