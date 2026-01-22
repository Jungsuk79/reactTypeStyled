import React from 'react';

export interface AlertItem {
    title: string;
    content: React.ReactNode;
    onConfirm?: () => void;
}

export const ALERT_DATA: Record<string, AlertItem> = {
    "success": { title: "저장 완료", content: "성공적으로 저장되었습니다." },
    "error": { title: "오류 발생", content: "다시 시도해주세요." },
    // 새로운 알럿 여기 추가
};

export const ALERT_ID = {
    SAVE_SUCCESS: "success",
    ERROR: "error",
} as const;