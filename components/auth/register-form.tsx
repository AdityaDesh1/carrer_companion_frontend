import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
    return (
        <Card className="w-full max-w-lg rounded-3xl border-0 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <CardContent className="space-y-8 p-12">

                {/* Heading */}
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Create Account 🚀
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Start your career journey today.
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-6">

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Full Name
                        </label>

                        <Input
                            className="h-12 rounded-2xl"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Email
                        </label>

                        <Input
                            className="h-12 rounded-2xl"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Password
                        </label>

                        <Input
                            className="h-12 rounded-2xl"
                            placeholder="Create a password"
                            type="password"
                        />
                    </div>

                    <Button className="h-12 w-full rounded-2xl text-base font-semibold">
                        Create Account
                    </Button>
                </div>

                <p className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-indigo-600"
                    >
                        Sign In
                    </Link>
                </p>

            </CardContent>
        </Card>
    );
}