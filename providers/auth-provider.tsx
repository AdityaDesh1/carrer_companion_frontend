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
        const user = localStorage.getItem("user");

        restore(
            token,
            user ? (JSON.parse(user) as AuthUser) : null
        );
    }, [restore]);

    return <>{children}</>;
}