"use client";

import { useQuery } from "@tanstack/react-query";

import { noteService } from "@/services/note.service";

export function useNotes() {
    return useQuery({
        queryKey: ["notes"],
        queryFn: noteService.getNotes,
    });
}
