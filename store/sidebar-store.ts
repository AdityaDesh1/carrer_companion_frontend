import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
    isCollapsed: boolean;
    isMobileOpen: boolean;

    toggleCollapse: () => void;

    openMobile: () => void;

    closeMobile: () => void;
    toggleMobile: () => void;

}


export const useSidebarStore = create<SidebarState>()(
    persist(
        (set) => ({
            isCollapsed: false,
            isMobileOpen: false,

            toggleCollapse: () =>
                set((state) => ({
                    isCollapsed: !state.isCollapsed,
                })),

            openMobile: () =>
                set({
                    isMobileOpen: true,
                }),

            closeMobile: () =>
                set({
                    isMobileOpen: false,
                }),
            toggleMobile: () =>
                set((state) => ({
                    isMobileOpen: !state.isMobileOpen,
                })),
        }),
        {
            name: "sidebar-storage",
            partialize: (state) => ({
                isCollapsed: state.isCollapsed,
            }),
        }
    )
);