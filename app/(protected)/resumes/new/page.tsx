import { ResumeForm } from "@/components/resumes";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NewResumePage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Resume</h1>

                <p className="text-slate-500">
                    Create a new resume record with a title and summary.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Resume Details</CardTitle>

                    <CardDescription>
                        Enter the information for your new resume.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ResumeForm />
                </CardContent>
            </Card>
        </div>
    );
}
