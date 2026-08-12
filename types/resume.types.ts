export interface Resume {
    id: string;
    title: string;
    summary?: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateResumeDto {
    title: string;
    summary?: string;
}

export interface UpdateResumeDto {
    title?: string;
    summary?: string;
}
