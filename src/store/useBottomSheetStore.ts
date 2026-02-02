import { create } from 'zustand';
import React from "react";

// 1. 시트 설정 타입 (필요한 옵션들)
interface BottomSheetConfig {
    sheetConfig?: {
        title?: string;
        primaryText?: string;
        secondaryText?: string;
    };
    dragType?: boolean;
    radius?: string;
    bottomBtn?: boolean;
    children: React.ReactNode;
    bottomCancel?: boolean;
    todayCheck?: boolean;
    onTodayClose?: () => void;
    onConfirm?: () => void;
}

// 2. 스토어 상태 타입
interface BottomSheetState extends BottomSheetConfig {
    isOpen: boolean;
    openSheet: (config: BottomSheetConfig) => void;
    closeSheet: () => void;
}

export const useBottomSheetStore = create<BottomSheetState>((set) => ({
    // 초기값 설정
    isOpen: false,
    sheetConfig: undefined,
    dragType: true,
    radius: "20px 20px 0 0",
    bottomBtn: true,
    children: null,
    bottomCancel: true,
    todayCheck: false,
    onTodayClose: undefined,
    onConfirm: undefined,

    // 시트 열기: 전달받은 config로 상태를 덮어씌웁니다.
    openSheet: (config) => {
        set({
            ...config,
            isOpen: true
        });
    },

    // 시트 닫기: isOpen만 false로 바꿉니다 (애니메이션 유지를 위해 데이터는 일단 둠)
    closeSheet: () => set({ isOpen: false }),
}));