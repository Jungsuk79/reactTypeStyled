import React from 'react';
import S from './SwiperItem.style';

interface SwiperItemProps {
    src?:string;
    text?: string;
    alt?: string;
    onClick?: () => void; // 클릭 이벤트 추가
    subText?: string;     // 부제목 추가
    menuTitle?: string;
}

const SwiperItem = ({ src, alt="이미지 알트값",menuTitle, text,subText, onClick }: SwiperItemProps) => {
    return (
        <S.ItemWrapper onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            {src && (
                    <S.ImageWrap>
                        <S.Image src={src} alt={alt} />
                    </S.ImageWrap>
                )
            }
            {text &&(
                <S.ItemTextBox>
                    <S.ItemTitle>{text}</S.ItemTitle>
                    {subText && (
                        <S.ItemText>{subText}</S.ItemText>
                    )}
                </S.ItemTextBox>
            )}
            {menuTitle &&(
                <S.MenuTitleWrap>
                    {menuTitle}
                </S.MenuTitleWrap>
            )}
        </S.ItemWrapper>
    );
};

export default SwiperItem;