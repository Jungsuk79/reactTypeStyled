import React from 'react';
import { S, StyledButtonProps } from './BasicButton.style';

interface ButtonProps extends StyledButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const BasicButton = ({
    type='submit',
    children,
    $variant,
    $width,
    $shape = 'square',
    $size = 'md',
    onClick
}: ButtonProps) => {

    return (
        <S.Button type={type} onClick={onClick} $shape={$shape} $variant={$variant} $width={$width} $size={$size}>
            {children}
        </S.Button>
    );
};

export default BasicButton;