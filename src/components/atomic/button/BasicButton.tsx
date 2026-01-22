import React from 'react';
import { S, StyledButtonProps } from './BasicButton.style';

interface ButtonProps extends StyledButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const BasicButton = ({ children, $variant, $width,$shape = 'square', $size = 'md', onClick }: ButtonProps) => {

    return (
        <S.Button $shape={$shape} $variant={$variant} $width={$width} $size={$size} onClick={onClick}>
            {children}
        </S.Button>
    );
};

export default BasicButton;