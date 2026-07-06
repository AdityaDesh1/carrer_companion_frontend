"use client";

import { useAuthStore } from "@/store/auth-store";

export default function DashboardPage() {
    const user = useAuthStore((state) => state.user);

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="text-slate-600">
                Welcome back,{" "}
                <span className="font-semibold">
                    {user?.name}
                </span>
            </p>
        </div>
    );
}