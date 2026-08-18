"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/hooks/use-register";

export default function RegisterForm() {
    const { form, onSubmit, isLoading } = useRegister();
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
                        Create Account 🚀
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Start your career journey today.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-6"
                >

                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                        </label>

                        <Input
                            id="name"
                            className="h-12 rounded-2xl"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            {...register("name")}
                        />

                        {errors.name && (
                            <p id="name-error" className="text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>

                        <Input
                            id="email"
                            className="h-12 rounded-2xl"
                            placeholder="Enter your email"
                            type="email"
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

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>

                        <div className="relative">
                            <Input
                                id="password"
                                className="h-12 rounded-2xl pr-12"
                                placeholder="Create a password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
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
                                aria-label={showPassword ? "Hide password" : "Show password"}
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

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 w-full rounded-2xl text-base font-semibold"
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>

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
