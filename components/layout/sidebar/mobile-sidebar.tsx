"use client";

import Logo from "./logo";

import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";

import { useSidebarStore } from "@/store/sidebar-store";
import SidebarNavigation from "./navigation";
import SidebarFooter from "./footer";
import { useEffect } from "react";

export default function MobileSidebar() {
    const closeMobile = useSidebarStore(
        (state) => state.closeMobile
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMobile();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [closeMobile]);

    const isMobileOpen = useSidebarStore(
        (state) => state.isMobileOpen
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
                className="flex w-72 flex-col p-0 md:hidden"
            >
                {/* Logo */}
                <div className="border-b p-4">
                    <Logo collapsed={false} />
                </div>

                {/* Navigation */}
                <SidebarNavigation
                    collapsed={false}
                    onItemClick={closeMobile}
                />

                {/* Footer */}
                <SidebarFooter
                    collapsed={false}
                    onItemClick={closeMobile}
                />
            </SheetContent>
        </Sheet>
    );
}