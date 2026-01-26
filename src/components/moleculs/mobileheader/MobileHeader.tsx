import React from 'react';
import S from './MobileHeader.style'
import {Link, NavLink} from "react-router-dom";

const MobileHeader = () => {
    return (
        <S.HeaderWrap>
            <S.NavWrap>
                <li>
                    <S.MenuIcon>11</S.MenuIcon>
                    <NavLink to={"/guide"}>메뉴</NavLink>
                </li>
                <li>
                    <S.MenuIcon>11</S.MenuIcon>
                    <NavLink to={"/guide"}>브랜드</NavLink>
                </li>
                <li>
                    <S.MenuIcon>11</S.MenuIcon>
                    <NavLink to={"/"}>홈</NavLink>
                </li>
                <li>
                    <S.MenuIcon>11</S.MenuIcon>
                    <NavLink to={"/guide"}>마이페이지</NavLink>
                </li>
                <li>
                    <S.MenuIcon>11</S.MenuIcon>
                    <NavLink to={"/guide"}>찜</NavLink>
                </li>
            </S.NavWrap>
        </S.HeaderWrap>
    );
};

export default MobileHeader;