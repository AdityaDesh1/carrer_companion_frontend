import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100 px-6 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">
                    Page not found
                </h1>

                <p className="max-w-md text-slate-500">
                    The page you are looking for does not exist or may have
                    been moved.
                </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                </Button>

                <Button asChild variant="outline">
                    <Link href="/login">Go to Login</Link>
                </Button>
            </div>
        </div>
    );
}
