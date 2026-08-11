"use client";

import { useAuthStore } from "@/store/auth-store";

export default function DashboardHeader() {
    const user = useAuthStore((state) => state.user);

    return (
        <section className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome back, {user?.name} 👋
            </h1>

            <p className="text-slate-600">
                Let's make today productive.
            </p>
        </section>
    );
}