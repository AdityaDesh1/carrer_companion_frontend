import ProjectForm from "@/components/projects/project-form";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export default function NewProjectPage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Create Project
                </h1>

                <p className="text-slate-500">
                    Create a new project to organize your job search.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>

                    <CardDescription>
                        Enter the information for your new project.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ProjectForm />
                </CardContent>
            </Card>
        </div>
    );
}