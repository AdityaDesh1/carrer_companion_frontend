import { InterviewForm } from "@/components/interviews";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NewInterviewPage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Interview</h1>

                <p className="text-slate-500">
                    Schedule a new interview in your career journey.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Interview Details</CardTitle>

                    <CardDescription>
                        Enter the information for your new interview.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <InterviewForm />
                </CardContent>
            </Card>
        </div>
    );
}
