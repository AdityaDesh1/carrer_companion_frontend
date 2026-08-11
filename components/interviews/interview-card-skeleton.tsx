import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function InterviewCardSkeleton() {
    return (
        <Card>
            <CardHeader className="gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>

                    <Skeleton className="h-5 w-24 rounded-full" />
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-2/3" />
            </CardContent>

            <CardFooter>
                <Skeleton className="h-8 w-20" />
            </CardFooter>
        </Card>
    );
}
