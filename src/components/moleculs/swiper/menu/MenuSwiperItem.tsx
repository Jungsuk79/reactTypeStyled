import React from 'react';
import S from './MenuSwiperItem.style';

interface SwiperItemProps {
    onClick?: () => void; // 클릭 이벤트 추가
    menuTitle?: string;
    defaultOn?: boolean;
}

const SwiperItem = ({ menuTitle, onClick, defaultOn }: SwiperItemProps) => {
    return (
        <S.MenuTitleWrap onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <S.MenuTitle $defaultOn={defaultOn}>
                {menuTitle}
            </S.MenuTitle>
        </S.MenuTitleWrap>
    );
};

export default SwiperItem;