"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

import { loginSchema, LoginSchema } from "@/schemas/login.schema";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth-store";

export function useLogin() {
    const router = useRouter();

    const login = useAuthStore((state) => state.login);

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginSchema) => {
        try {
            setIsLoading(true);

            const response = await authService.login(data);

            login(response.accessToken, response.user);

            toast.success("Login successful");

            router.push("/dashboard");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                    "Invalid email or password"
                );
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        form,
        isLoading,
        onSubmit,
    };
}