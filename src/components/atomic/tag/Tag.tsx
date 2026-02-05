import React from 'react';
import S from './Tag.style';

interface TagProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    type?: 'primary' | 'error' | 'gray' | 'line'| 'black';
}

const Tag = ({ children, type="black", size = "medium" }:TagProps) => {
    return (
        <S.Tag $type={type} $size={size}>
            {children}
        </S.Tag>
    );
};

export default Tag;