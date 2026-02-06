import React from 'react';
import S from './BoxList.style';

interface BoxListProps {
    imgSrc: string;
    altText?: string;
}
const BoxList = ({imgSrc,altText}:BoxListProps) => {
    return (
        <>
            <S.BoxListItem>
                <img src={imgSrc} alt={altText} />
            </S.BoxListItem>
        </>
    );
};

export default BoxList;