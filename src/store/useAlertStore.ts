import { create } from 'zustand';
import React from "react"; // {} 중괄호 필수 (Zustand v4 기준)

interface AlertConfig {
    title: string;
    content: React.ReactNode;
    onConfirm?: () => void;
}

interface AlertState extends AlertConfig {
    isOpen: boolean;
    openAlert: (config: AlertConfig) => void;
    closeAlert: () => void;
}
export const useAlertStore = create<AlertState>((set) => ({
    isOpen: false,
    title: '',
    content: null,
    onConfirm: undefined,

    // config를 통째로 덮어씌우는 방식
    openAlert: (config) => {
        set({
            ...config,
            isOpen: true
        });
    },

    closeAlert: () => set({
        isOpen: false,
        title: '',
        content: null,
        onConfirm: undefined
    }),
}));