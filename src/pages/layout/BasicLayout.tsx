import React from 'react';
import { Outlet } from 'react-router-dom';
import S from './BasicLayout.style'
import MobileHeader from "../../components/moleculs/mobileheader/MobileHeader";

const BasicLayout = () => {


    return (
        <S.LayoutWrap>
            <S.LayoutContent>
                <Outlet />
            </S.LayoutContent>
            <MobileHeader />
        </S.LayoutWrap>
    );
};

export default BasicLayout;