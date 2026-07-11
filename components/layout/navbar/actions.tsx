"use client";

import UserDropdown from "./user-dropdown";

export default function NavbarActions() {
    return (
        <div className="flex items-center gap-4">
            <UserDropdown />
        </div>
    );
}