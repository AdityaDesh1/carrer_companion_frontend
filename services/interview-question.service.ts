import { api } from "@/lib/axios";
import {
    CreateInterviewQuestionDto,
    InterviewQuestion,
    UpdateInterviewQuestionDto,
} from "@/types/interview-question.types";

export const interviewQuestionService = {
    async getInterviewQuestions() {
        const response = await api.get<InterviewQuestion[]>(
            "/interview-questions"
        );
        return response.data;
    },

    async getInterviewQuestion(id: string) {
        const response = await api.get<InterviewQuestion>(
            `/interview-questions/${id}`
        );
        return response.data;
    },

    async createInterviewQuestion(data: CreateInterviewQuestionDto) {
        const response = await api.post<InterviewQuestion>(
            "/interview-questions",
            data
        );
        return response.data;
    },

    async updateInterviewQuestion(
        id: string,
        data: UpdateInterviewQuestionDto
    ) {
        const response = await api.patch<InterviewQuestion>(
            `/interview-questions/${id}`,
            data
        );
        return response.data;
    },

    async deleteInterviewQuestion(id: string) {
        await api.delete(`/interview-questions/${id}`);
    },
};
