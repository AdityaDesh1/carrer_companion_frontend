"use client";

import Sidebar from "./sidebar/sidebar";
import MobileSidebar from "./sidebar/mobile-sidebar";
import TopNavbar from "./navbar/navbar";

interface AppShellProps {
    children: React.ReactNode;
}

export default function AppShell({
    children,
}: AppShellProps) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* Desktop & Tablet Sidebar */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Mobile Drawer */}
            <MobileSidebar />

            {/* Main Content */}
            <div className="flex min-w-0 flex-1 flex-col">
                <TopNavbar />

                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}