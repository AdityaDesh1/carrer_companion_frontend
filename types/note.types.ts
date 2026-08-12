export interface Note {
    id: string;
    title: string;
    content: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface GetNotesParams {
    page?: number;
    limit?: number;
}

export interface CreateNoteDto {
    title: string;
    content: string;
}

export interface UpdateNoteDto {
    title?: string;
    content?: string;
}
