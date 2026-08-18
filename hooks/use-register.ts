"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

import { registerSchema, RegisterSchema } from "@/schemas/register.schema";
import { authService } from "@/services/auth.service";

export function useRegister() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: RegisterSchema) => {
        try {
            setIsLoading(true);

            await authService.register(data);

            toast.success("Account created successfully");

            router.push("/login");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message ??
                    "Unable to create account"
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
