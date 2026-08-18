"use client";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { useLogin } from "@/hooks/use-login";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
    const { form, onSubmit, isLoading } = useLogin();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <Card className="w-full max-w-lg rounded-3xl border-0 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <CardContent className="space-y-8 p-12">
                {/* Heading */}
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Welcome Back 👋
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Sign in to continue your journey.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-6"
                >
                    {/* Email */}

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>

                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 rounded-2xl"
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            {...register("email")}
                        />

                        {errors.email && (
                            <p id="email-error" className="text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}

                    {/* Password */}

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>

                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="h-12 rounded-2xl pr-12"
                                autoComplete="current-password"
                                aria-invalid={!!errors.password}
                                aria-describedby={
                                    errors.password ? "password-error" : undefined
                                }
                                {...register("password")}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-slate-700"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p id="password-error" className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-sm text-slate-500 hover:text-indigo-600"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 w-full rounded-2xl text-base font-semibold"
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                </form>

                <div className="flex items-center gap-4">
                    <Separator className="flex-1" />

                    <span className="text-sm text-slate-400">
                        OR
                    </span>

                    <Separator className="flex-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 rounded-2xl"
                    >
                        Google
                    </Button>

                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 rounded-2xl"
                    >
                        GitHub
                    </Button>
                </div>

                <p className="text-center text-sm text-slate-500">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="font-semibold text-indigo-600"
                    >
                        Sign Up
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}