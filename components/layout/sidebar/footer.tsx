"use client";

import SidebarItem from "./item";

import { bottomNavigation } from "@/constants/navigation";

interface SidebarFooterProps {
    collapsed: boolean;
    onItemClick?: () => void;
}

export default function SidebarFooter({
    collapsed,
    onItemClick,
}: SidebarFooterProps) {
    return (
        <div className="space-y-2 border-t p-4">
            {bottomNavigation.map((item) => (
                <SidebarItem
                    key={item.href}
                    item={item}
                    collapsed={collapsed}
                    onClick={onItemClick}
                />
            ))}
        </div>
    );
}