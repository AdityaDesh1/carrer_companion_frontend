"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { noteService } from "@/services/note.service";

export function useDeleteNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => noteService.deleteNote(id),

        onSuccess: (_data, id) => {
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
            queryClient.removeQueries({
                queryKey: ["note", id],
            });
        },
    });
}
