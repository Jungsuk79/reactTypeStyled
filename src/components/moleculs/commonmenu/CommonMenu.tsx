import React from 'react';
import S from './CommonMenu.style'
import {NavLink} from "react-router-dom";

export interface CommonMenuProps {
    isHidden: boolean;
}

const CommonMenu = ({isHidden}:CommonMenuProps) => {
    return (
        <S.NavWrap $isHidden={isHidden}>
            <S.NavList>
                <li>
                    <NavLink to={"/"}>
                        <S.MenuIcon>11</S.MenuIcon>
                        메뉴
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/brand"}>
                        <S.MenuIcon>11</S.MenuIcon>
                        브랜드
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <S.MenuIcon>11</S.MenuIcon>
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/guide"}>
                        <S.MenuIcon>11</S.MenuIcon>
                        가이드
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <S.MenuIcon>11</S.MenuIcon>
                        찜
                    </NavLink>
                </li>
            </S.NavList>
        </S.NavWrap>
    );
};

export default CommonMenu;