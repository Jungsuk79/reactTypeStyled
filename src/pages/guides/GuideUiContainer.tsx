import React from 'react';
import S from './Guide.style';
import GuideButton from "../../pages/guides/GuideButton";
import GuideForm from "../../pages/guides/GuideForm";

const GuideUiContainer = () => {

    return (
        <>
            <S.GuideSubTitle>BUTTON TYPE</S.GuideSubTitle>
            <S.GuideBoxTitle>Button Size(small,medium,large,full), Button Shape(small,large,big)</S.GuideBoxTitle>
            <GuideButton />
            <S.GuideSubTitle>FORM</S.GuideSubTitle>
            <GuideForm />
        </>
    );
};

export default GuideUiContainer;