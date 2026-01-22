import React from 'react';
import S from './Guide.style'
import BasicButton from "../../components/atomic/button/BasicButton";

const GuideButton = () => {
    return (
        <>
            <S.GuideSpace>
                <BasicButton $size={"sm"}>버튼</BasicButton>
                <BasicButton $variant={"line"} $size={"sm"}>버튼</BasicButton>
                <BasicButton $variant={"primary"} $size={"sm"}>버튼</BasicButton>
                <BasicButton $variant={"primaryLine"} $size={"sm"}>버튼</BasicButton>
                <BasicButton $variant={"secondary"} $size={"sm"}>버튼</BasicButton>
                <BasicButton $variant={"secondaryLine"} $size={"sm"}>버튼</BasicButton>
                <BasicButton $variant={"error"} $size={"sm"}>버튼</BasicButton>
            </S.GuideSpace>
            <S.GuideSpace>
                <BasicButton>버튼</BasicButton>
                <BasicButton $variant={"line"}>버튼</BasicButton>
                <BasicButton $variant={"primary"}>버튼</BasicButton>
                <BasicButton $variant={"primaryLine"}>버튼</BasicButton>
                <BasicButton $variant={"secondary"}>버튼</BasicButton>
                <BasicButton $variant={"secondaryLine"}>버튼</BasicButton>
                <BasicButton $variant={"error"}>버튼</BasicButton>
            </S.GuideSpace>
            <S.GuideSpace>
                <BasicButton $size={"lg"}>버튼</BasicButton>
                <BasicButton $variant={"line"} $size={"lg"}>버튼</BasicButton>
                <BasicButton $variant={"primary"} $size={"lg"}>버튼</BasicButton>
                <BasicButton $variant={"primaryLine"} $size={"lg"}>버튼</BasicButton>
                <BasicButton $variant={"secondary"} $size={"lg"}>버튼</BasicButton>
                <BasicButton $variant={"secondaryLine"} $size={"lg"}>버튼</BasicButton>
                <BasicButton $variant={"error"} $size={"lg"}>버튼</BasicButton>
            </S.GuideSpace>
            <S.GuideSpace>
                <BasicButton $size={"lg"} $width={"200px"}>200px</BasicButton>
                <BasicButton $size={"lg"} $width={"100%"}>100%</BasicButton>
            </S.GuideSpace>
            <S.GuideSpace>
                <BasicButton $shape={"round"} $size={"sm"}>스몰 라운드 버튼</BasicButton>
                <BasicButton $shape={"round"}>일반 라운드 버튼</BasicButton>
                <BasicButton $shape={"round"} $size={"lg"}>라지 라운드 버튼</BasicButton>
            </S.GuideSpace>
        </>

    )
        ;
};

export default GuideButton;