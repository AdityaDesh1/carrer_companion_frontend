import { ApplicationForm } from "@/components/applications";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NewApplicationPage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Application</h1>

                <p className="text-slate-500">
                    Track a new job application in your career journey.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Application Details</CardTitle>

                    <CardDescription>
                        Enter the information for your new application.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ApplicationForm />
                </CardContent>
            </Card>
        </div>
    );
}
