import { NoteForm } from "@/components/notes";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NewNotePage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Note</h1>

                <p className="text-slate-500">
                    Create a new note to capture career-related thoughts and
                    information.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Note Details</CardTitle>

                    <CardDescription>
                        Enter a title and content for your new note.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <NoteForm />
                </CardContent>
            </Card>
        </div>
    );
}
