import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { LayoutContextType } from '../../types/layout';
import S from './MypageContainer.style';


const MypageContainer = () => {


    const pageName = "마이페이지"

    const { setHeaderProps } = useOutletContext<LayoutContextType>();
    useEffect(() => {
        setHeaderProps({ showBack: true });
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