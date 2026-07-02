import { create } from "zustand";

export interface AuthUser {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    accessToken: string | null;
    user: AuthUser | null;

    isAuthenticated: boolean;
    isInitialized: boolean;

    login: (accessToken: string, user: AuthUser) => void;

    restore: (
        accessToken: string | null,
        user: AuthUser | null
    ) => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,

    user: null,

    isAuthenticated: false,

    isInitialized: false,

    login: (accessToken, user) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        set({
            accessToken,
            user,
            isAuthenticated: true,
            isInitialized: true,
        });
    },

    restore: (accessToken, user) => {
        set({
            accessToken,
            user,
            isAuthenticated: !!accessToken,
            isInitialized: true,
        });
    },

    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        set({
            accessToken: null,
            user: null,
            isAuthenticated: false,
            isInitialized: true,
        });
    },
}));