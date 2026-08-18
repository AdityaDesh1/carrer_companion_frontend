"use client";

import { useEffect } from "react";

import { useAuthStore, AuthUser } from "@/store/auth-store";

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const restore = useAuthStore((state) => state.restore);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const storedUser = localStorage.getItem("user");

        let user: AuthUser | null = null;

        if (storedUser) {
            try {
                user = JSON.parse(storedUser) as AuthUser;
            } catch {
                localStorage.removeItem("user");
            }
        }

        restore(token, user);
    }, [restore]);

    return <>{children}</>;
}