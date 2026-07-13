"use client";

import SidebarItem from "./item";

import { navigation } from "@/constants/navigation";

interface SidebarNavigationProps {
    collapsed: boolean;
    onItemClick?: () => void;
}

export default function SidebarNavigation({
    collapsed,
    onItemClick,
}: SidebarNavigationProps) {
    return (
        <nav className="space-y-2 p-4">
            {navigation.map((item) => (
                <SidebarItem
                    key={item.href}
                    item={item}
                    collapsed={collapsed}
                    onClick={onItemClick}
                />
            ))}
        </nav>
    );
}