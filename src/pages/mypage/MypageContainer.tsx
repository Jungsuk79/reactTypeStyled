import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { LayoutContextType } from '../../types/layout';
import S from './MypageContainer.style';


const MypageContainer = () => {

    const { setHeaderProps } = useOutletContext<LayoutContextType>();

    const pageName = "마이페이지"
    
    useEffect(() => {
        // 페이지가 마운트될 때 헤더 정보 설정
        setHeaderProps({ showBack: true });

        // 언마운트될 때 헤더 정보 초기화
        return () => setHeaderProps(null);
    }, [setHeaderProps]);

    return (
        <>
            <S.PageTitle>
                {pageName}
            </S.PageTitle>
            <div>
                마이페이지 내용
            </div>
        </>
    );
};

export default MypageContainer;