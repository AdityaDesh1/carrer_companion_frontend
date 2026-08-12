"use client";

import { useQuery } from "@tanstack/react-query";

import { noteService } from "@/services/note.service";

export function useNote(id: string) {
    return useQuery({
        queryKey: ["note", id],
        queryFn: () => noteService.getNote(id),
        enabled: Boolean(id),
    });
}
