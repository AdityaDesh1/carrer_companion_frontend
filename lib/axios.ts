import axios from "axios";

import { useAuthStore } from "@/store/auth-store";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL && process.env.NODE_ENV === "development") {
    throw new Error(
        "NEXT_PUBLIC_API_URL is not set. Copy .env.example to .env.local and set NEXT_PUBLIC_API_URL=http://localhost:3000/api"
    );
}

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        if (!API_BASE_URL) {
            return Promise.reject(
                new Error(
                    "NEXT_PUBLIC_API_URL is not configured. Set it in your environment variables."
                )
            );
        }

        if (typeof window !== "undefined") {
            const token = localStorage.getItem("accessToken");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            const requestUrl = error.config?.url ?? "";
            const isAuthRequest =
                requestUrl.includes("/auth/login") ||
                requestUrl.includes("/auth/register");

            if (!isAuthRequest && typeof window !== "undefined") {
                useAuthStore.getState().logout();

                const pathname = window.location.pathname;
                const isPublicRoute =
                    pathname.startsWith("/login") ||
                    pathname.startsWith("/register");

                if (!isPublicRoute) {
                    window.location.replace("/login");
                }
            }
        }

        return Promise.reject(error);
    }
);