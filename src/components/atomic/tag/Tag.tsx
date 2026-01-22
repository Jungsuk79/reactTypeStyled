import React from 'react';
import S from './Tag.style';

interface TagProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    type?: 'primary' | 'secondary' | 'error' | 'gray' | 'line';
}

const Tag = ({ children, type="gray", size = "medium" }:TagProps) => {
    return (
        <S.Tag $type={type} $size={size}>
            {children}
        </S.Tag>
    );
};

export default Tag;