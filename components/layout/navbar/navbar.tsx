"use client";

import NavbarActions from "./actions";
import MobileToggle from "./mobile-toggle";
import PageTitle from "../shared/page-title";

export default function TopNavbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-4">
                <MobileToggle />
                <PageTitle />
            </div>

            <NavbarActions />
        </header>
    );
}