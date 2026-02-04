import React from 'react';
import S from './CommonMenu.style'
import {NavLink, useNavigate} from "react-router-dom";
import {useAlertStore} from "../../../store/useAlertStore";
import {useAuthStore} from "../../../store/useAuthStore";

export interface CommonMenuProps {
    isHidden: boolean;
}

const CommonMenu = ({isHidden}:CommonMenuProps) => {

    const IconMenu = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="3 3 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 5.5h16M4 12h16M4 19h16" />
        </svg>
    );
    const IconBrand = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="1 1 22 22"><g clip-path="url(#mo_brand_svg__a)"><path stroke="#FCFCFC" stroke-width="1.44" d="m3.13 9.594 10.81-5.903a1.78 1.78 0 0 1 1.513-.09l5.922 2.364a1.78 1.78 0 0 1 1.087 1.994l-1.216 6.249a1.78 1.78 0 0 1-.894 1.222L9.54 21.334a1.78 1.78 0 0 1-2.416-.71L2.42 12.01a1.78 1.78 0 0 1 .71-2.416Z"></path><circle cx="17.35" cy="9.15" r="1.15" fill="#FCFCFC" transform="rotate(90 17.35 9.15)"></circle></g><defs><clipPath id="mo_brand_svg__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
    );
    const IconHome = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 50 230 169" width="26" height="26"><path fill="#FFF" d="M223.966 227.004c-8.953 4.95-18.392 7.488-28.046 7.831-16.72.594-33.477.165-50.572.165v-39c7.324 0 14.921.26 22.493-.07 8.318-.363 16.898-.144 24.858-2.167 18.541-4.713 18.023-26.854 7.957-34.221-4.685-3.43-11.083-6.033-16.81-6.251-19.768-.753-39.582-.29-59.779-.29v82.77H80.225V33h4.967c32 0 64-.023 96 .01 14.442.015 27.99 3.706 39.69 12.106 12.485 8.963 19.83 21.095 20.228 37.115.303 12.217-1.054 23.813-9.168 33.455-4.266 5.068-9.367 9.433-14.623 14.641 20.303 8.053 34.86 21.898 35.531 45.564.553 19.475-3.61 38.218-28.884 51.113m-48.89-154.003H124.24V114c17.11 0 34.006.564 50.826-.323 5.486-.29 11.223-3.685 16.028-6.886 5.296-3.527 3.545-9.902 3.983-15.345.617-7.65-3.232-12.249-9.592-15.209-3.012-1.402-6.322-2.164-10.407-3.235"></path></svg>
    )
    const IconMypage = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="2 2 24 24"><path stroke="#FCFCFC" stroke-linecap="round" stroke-width="1.688" d="M5 24.125V20.75a5.625 5.625 0 0 1 5.625-5.625h6.75A5.625 5.625 0 0 1 23 20.75v2.901"></path><circle cx="14" cy="8.375" r="3.656" stroke="#FCFCFC" stroke-width="1.688"></circle></svg>
    )
    const IconJjim = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="-1 -1 28 27"><path stroke="#FCFCFC" stroke-width="1.5" d="M13.38 23.562C7.235 19.317 4.13 15.39 2.647 12.378c-1.732-3.52-.36-7.942 3.248-9.483 4.243-1.81 7.148 2.142 7.148 2.142s2.737-4.061 7.043-2.4C23.75 4.05 25.28 8.424 23.676 12c-1.37 3.06-4.311 7.102-10.296 11.562Z"></path></svg>
    )

    // 페이지 이동(마이페이지)
    const navigate = useNavigate();
    // 로그인 안됐을때 알럿뜨도록 설정
    const openAlert = useAlertStore((state) => state.openAlert);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const handleLoginCheckClick = () =>{
        if(!isLoggedIn) {
            openAlert({
                title:"권한 안내",
                content: <p>로그인 후 이용가능한 페이지입니다.<br />로그인페이지로 이동 하시겠습니까?</p>,
                onConfirm: () => navigate("/login")
            });
        }else {
            navigate("/mypage");
        }
    }

    return (
        <S.NavWrap $isHidden={isHidden}>
            <S.NavList>
                <li>
                    <NavLink to={"/customer/faq"}>
                        <S.MenuIcon>
                            <IconMenu />
                        </S.MenuIcon>
                        메뉴
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/brand"}>
                        <S.MenuIcon>
                            <IconBrand />
                        </S.MenuIcon>
                        브랜드
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>
                        <S.MenuIcon>
                            <IconHome />
                        </S.MenuIcon>
                        홈
                    </NavLink>
                </li>
                <li>
                    <button onClick={handleLoginCheckClick}>
                        <S.MenuIcon>
                            <IconMypage />
                        </S.MenuIcon>
                        MYPAGE
                    </button>
                </li>
                <li>
                    <NavLink to={"/guide"}>
                        <S.MenuIcon>
                            <IconJjim />
                        </S.MenuIcon>
                        가이드
                    </NavLink>
                </li>
            </S.NavList>
        </S.NavWrap>
    );
};

export default CommonMenu;