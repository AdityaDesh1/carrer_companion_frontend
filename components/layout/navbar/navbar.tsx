"use client";

import NavbarActions from "./actions";
// import NavbarToggle from "./navbar-toggle";

export default function TopNavbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-4">
                {/* <NavbarToggle /> */}

                <h1 className="text-xl font-semibold text-slate-900">
                    Dashboard
                </h1>
            </div>

            <NavbarActions />
        </header>
    );
}