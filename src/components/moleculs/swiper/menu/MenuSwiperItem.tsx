import React from 'react';
import S from './MenuSwiperItem.style';
import {useNavigate} from "react-router-dom";

interface SwiperItemProps {
    onClick?: () => void; // 클릭 이벤트 추가
    menuTitle?: string;
    defaultOn?: boolean;
    linkUrl?: string;
}

const SwiperItem = ({ menuTitle, onClick, defaultOn,linkUrl }: SwiperItemProps) => {

    const navigate = useNavigate();
    const handleLinkMove = () =>{
        console.log("클릭됨! 이동할 주소:", linkUrl);
        if (onClick) onClick();
        if (!linkUrl) {
            alert("준비중입니다.")
            return;
        }
        navigate(linkUrl);
    }

    return (
        <S.MenuTitleWrap onClick={handleLinkMove} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <S.MenuTitle $defaultOn={defaultOn}>
                {menuTitle}
            </S.MenuTitle>
        </S.MenuTitleWrap>
    );
};

export default SwiperItem;