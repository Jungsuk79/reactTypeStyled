import React from 'react';
import { SBtnGroup } from './ButtonGroup.style';

export interface ButtonGroupProps {
    marginTop?: string;      // 예: "20px", "2rem"
    gap?: number;            // 버튼 사이 간격 (px 단위)
    align?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
    direction?: 'row' | 'column';
    fullWidth?: boolean;
    children: React.ReactNode;
}

const ButtonGroup = ({
    marginTop = '0',
    gap = 10,
    align = 'flex-start',
    direction = 'row',
    fullWidth = false,
    children
}: ButtonGroupProps) => {
    return (
        <SBtnGroup $marginTop={marginTop} gap={gap} align={align} direction={direction} $fullWidth={fullWidth}>
            {children}
        </SBtnGroup>
    );
};

export default ButtonGroup;