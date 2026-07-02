"use client";

import { useRouter } from "next/navigation";

import ProtectedRoute from "@/components/auth/protected-route";
import { useAuthStore } from "@/store/auth-store";

export default function DashboardPage() {
    const router = useRouter();

    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);

    const handleLogout = () => {
        logout();

        router.replace("/login");
    };

    return (
        <ProtectedRoute>
            <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-50">
                <div className="space-y-2 text-center">
                    <h1 className="text-5xl font-bold">
                        Dashboard 🚀
                    </h1>

                    <p className="text-lg text-slate-600">
                        Welcome, <span className="font-semibold">{user?.name}</span>
                    </p>

                    <p className="text-slate-500">
                        {user?.email}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="rounded-xl bg-red-600 px-8 py-3 text-white transition hover:bg-red-700"
                >
                    Logout
                </button>
            </main>
        </ProtectedRoute>
    );
}