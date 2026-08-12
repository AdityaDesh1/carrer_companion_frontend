"use client";

import { useQuery } from "@tanstack/react-query";

import { noteService } from "@/services/note.service";
import { GetNotesParams } from "@/types/note.types";

export function useNotes(params?: GetNotesParams) {
    return useQuery({
        queryKey: params ? ["notes", params] : ["notes"],
        queryFn: () => noteService.getNotes(params),
    });
}
