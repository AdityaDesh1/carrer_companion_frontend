import { api } from "@/lib/axios";
import {
    CreateNoteDto,
    Note,
    UpdateNoteDto,
} from "@/types/note.types";

export const noteService = {
    async getNotes() {
        const response = await api.get<Note[]>("/notes");
        return response.data;
    },

    async getNote(id: string) {
        const response = await api.get<Note>(`/notes/${id}`);
        return response.data;
    },

    async createNote(data: CreateNoteDto) {
        const response = await api.post<Note>("/notes", data);
        return response.data;
    },

    async updateNote(id: string, data: UpdateNoteDto) {
        const response = await api.patch<Note>(`/notes/${id}`, data);
        return response.data;
    },

    async deleteNote(id: string) {
        await api.delete(`/notes/${id}`);
    },
};
