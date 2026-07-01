import { api } from "@/lib/axios";
import { LoginDto, RegisterDto } from "@/types/auth.types";

export const authService = {
    async login(data: LoginDto) {
        const response = await api.post("/auth/login", data);

        return response.data;
    },

    async register(data: RegisterDto) {
        const response = await api.post("/auth/register", data);

        return response.data;
    },
};