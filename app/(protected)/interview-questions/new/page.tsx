import { InterviewQuestionForm } from "@/components/interview-questions";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NewInterviewQuestionPage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Question</h1>

                <p className="text-slate-500">
                    Add a new interview question to your preparation bank.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Question Details</CardTitle>

                    <CardDescription>
                        Enter the question, topic, difficulty, and optional
                        answer and company.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <InterviewQuestionForm />
                </CardContent>
            </Card>
        </div>
    );
}
