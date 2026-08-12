import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatCardSkeleton() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-5 rounded-md" />
            </CardHeader>

            <CardContent>
                <Skeleton className="h-9 w-16" />
                <Skeleton className="mt-2 h-4 w-32" />
            </CardContent>
        </Card>
    );
}
