"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
}: ProtectedRouteProps) {
    const router = useRouter();

    const isAuthenticated = useAuthStore(
        (state) => state.isAuthenticated
    );

    const isInitialized = useAuthStore(
        (state) => state.isInitialized
    );

    useEffect(() => {
        if (isInitialized && !isAuthenticated) {
            router.replace("/login");
        }
    }, [isAuthenticated, isInitialized, router]);

    if (!isInitialized) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}