"use client";

import { LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";

export default function UserDropdown() {
    const router = useRouter();

    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const initials =
        user?.name
            ?.split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase() ?? "CC";

    const handleLogout = () => {
        logout();
        router.replace("/login");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    aria-label="Open user menu"
                    className="rounded-full outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
                >
                    <Avatar>
                        <AvatarFallback>
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-64"
            >
                <DropdownMenuLabel>
                    <div className="flex flex-col">
                        <span className="font-semibold">
                            {user?.name}
                        </span>

                        <span className="text-xs text-slate-500">
                            {user?.email}
                        </span>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}