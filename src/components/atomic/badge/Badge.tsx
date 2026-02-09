import React from 'react';
import S from './Badge.style'; // 스타일 파일을 따로 분리하는 경우

interface BadgeProps {
    label: string;
    type?: string;
    size?: "sm" | "md" | "lg";
}

const Badge = ({size="md", label, type = 'default' }: BadgeProps) => {
    return (
        <S.BadgeItem $type={type} $size={size}>
            {label}
        </S.BadgeItem>
    );
};

export default Badge;