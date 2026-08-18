"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "@/lib/query-client";
import { AuthProvider } from "@/providers/auth-provider";

export function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    const [client] = useState(() => queryClient);

    return (
        <QueryClientProvider client={client}>
            <TooltipProvider delayDuration={100}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
}