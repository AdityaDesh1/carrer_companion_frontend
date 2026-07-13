"use client";

import { LucideIcon } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface StatCardProps {
    title: string;
    value: number;
    description: string;
    icon: LucideIcon;
}

export default function StatCard({
    title,
    value,
    description,
    icon: Icon,
}: StatCardProps) {
    return (
        <Card className="transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-slate-600">
                    {title}
                </CardTitle>

                <Icon className="h-5 w-5 text-slate-500" />
            </CardHeader>

            <CardContent>
                <div className="text-3xl font-bold text-slate-900">
                    {value}
                </div>

                <p className="mt-1 text-sm text-slate-500">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}