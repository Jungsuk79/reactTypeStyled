import React, {useEffect, useState} from 'react';
import {Link, useOutletContext} from "react-router-dom";
import {LayoutContextType} from "../../types/layout";
import S from './Login.style';
import BasicInput from "../../components/atomic/input/BasicInput";
import BasicCheckbox from "../../components/atomic/checkbox/BasicCheckBox";
import BasicButton from "../../components/atomic/button/BasicButton";
import {usePageHeader} from "../../hooks/usePageHeader";

const Login = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    usePageHeader({ title: "",isSearch : false, isCart: false,isHome : true});

    const { setFooterVisible,setMenuVisible } = useOutletContext<LayoutContextType>();
    useEffect(() => {
        setFooterVisible(false);
        setMenuVisible(false);
        return () => {
            setFooterVisible(true);
            setMenuVisible(true);
        };
    }, [setFooterVisible, setMenuVisible]);

    return (
        <>
            <S.LoginWrap>
                <S.LoginTitle>로그인 페이지</S.LoginTitle>
                <form>
                    <S.LoginList>
                        <li>
                            <BasicInput
                                fullSize={true}
                                placeholder={"아이디"}
                                name={"userId"}
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </li>
                        <li>
                            <BasicInput
                                showTxt={true}
                                type={"password"}
                                fullSize={true}
                                placeholder={"비밀번호"}
                                name={"userPw"}
                                value={userPw}
                                onChange={(e) => setUserPw(e.target.value)}
                            />
                        </li>
                    </S.LoginList>
                    <S.AutoLogin>
                        <BasicCheckbox id={"check01"} labelTxt={"자동 로그인"}/>
                    </S.AutoLogin>
                    <S.LoginButtonWrap>
                        <BasicButton $shape={"round"} $width={"100%"}>로그인</BasicButton>
                    </S.LoginButtonWrap>
                    <S.MemberButtonWrap>
                        <Link to={"/"}>아이디 찾기</Link>
                        <Link to={"/"}>비밀번호 찾기</Link>
                        <Link to={"/member"}>회원가입</Link>
                    </S.MemberButtonWrap>
                    <S.SnsButtonWrap>
                        <BasicButton type={"button"} $variant={"line"} $size={"sm"} $shape={"round"} $width={"100%"}><S.kakaoIcon></S.kakaoIcon>카카오로 로그인</BasicButton>
                        <BasicButton type={"button"} $variant={"line"} $size={"sm"} $shape={"round"} $width={"100%"}><S.NaverIcon></S.NaverIcon>네이버로 로그인</BasicButton>
                    </S.SnsButtonWrap>
                </form>
            </S.LoginWrap>
        </>
    );
};

export default Login;