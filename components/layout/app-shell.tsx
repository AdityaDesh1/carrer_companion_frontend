"use client";

interface AppShellProps {
    children: React.ReactNode;
}

export default function AppShell({
    children,
}: AppShellProps) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* Sidebar */}
            <aside className="w-72 border-r bg-white">
                Sidebar
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Top Navbar */}
                <header className="h-16 border-b bg-white px-6 flex items-center">
                    Navbar
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}