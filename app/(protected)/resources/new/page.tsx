import { ResourceForm } from "@/components/resources";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NewResourcePage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Resource</h1>

                <p className="text-slate-500">
                    Save a useful career resource for future reference.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Resource Details</CardTitle>

                    <CardDescription>
                        Enter the information for your new resource.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ResourceForm />
                </CardContent>
            </Card>
        </div>
    );
}
