"use client";

import Logo from "./logo";
import SidebarItem from "./item";

import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";

import {
    navigation,
    bottomNavigation,
} from "@/constants/navigation";

import { useSidebarStore } from "@/store/sidebar-store";

export default function MobileSidebar() {
    const isMobileOpen = useSidebarStore(
        (state) => state.isMobileOpen
    );

    const closeMobile = useSidebarStore(
        (state) => state.closeMobile
    );

    return (
        <Sheet
            open={isMobileOpen}
            onOpenChange={(open) => {
                if (!open) {
                    closeMobile();
                }
            }}
        >
            <SheetContent
                side="left"
                className="flex w-72 flex-col p-0"
            >
                <div className="border-b p-4">
                    <Logo />
                </div>

                <nav className="flex-1 space-y-2 p-4">
                    {navigation.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                        />
                    ))}
                </nav>

                <div className="space-y-2 border-t p-4">
                    {bottomNavigation.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                        />
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}