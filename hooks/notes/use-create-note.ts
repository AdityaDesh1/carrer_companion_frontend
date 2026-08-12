"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { noteService } from "@/services/note.service";

export function useCreateNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: noteService.createNote,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
        },
    });
}
