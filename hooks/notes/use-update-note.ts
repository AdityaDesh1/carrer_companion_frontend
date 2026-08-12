"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { noteService } from "@/services/note.service";
import { UpdateNoteDto } from "@/types/note.types";

export function useUpdateNote(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: UpdateNoteDto) =>
            noteService.updateNote(id, data),

        onSuccess: (updatedNote) => {
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
            queryClient.invalidateQueries({
                queryKey: ["note", id],
            });
            queryClient.setQueryData(["note", id], updatedNote);
        },
    });
}
