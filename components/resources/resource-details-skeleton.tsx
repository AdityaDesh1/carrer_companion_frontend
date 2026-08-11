import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ResourceDetailsSkeleton() {
    return (
        <Card>
            <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-2/3" />
                        <Skeleton className="h-4 w-1/3" />
                    </div>
                    <Skeleton className="h-5 w-20 rounded-full" />
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-full" />
                </div>

                <Skeleton className="h-px w-full" />

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-32" />
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-4 w-32" />
                    </div>

                    <div className="space-y-2 sm:col-span-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
