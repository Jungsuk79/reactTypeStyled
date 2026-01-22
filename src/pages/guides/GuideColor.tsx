import React from 'react';
import S from "./Guide.style";
import {pointColor,colorBar} from "./mocks/guide.mock";
import GuideColorBar from "./GuideColorBar";

const GuideColor = () => {
    const renderColorBars = (type:'brand'|'sub'|'gray') =>
        colorBar
        .filter(item => item.type === type)
        .map((data, i) => (
            <S.GuideColorBar key={i}>
                <GuideColorBar data={data} />
            </S.GuideColorBar>
        ));
    return (
        <>
            <S.GuideSubTitle>Text Colors : 텍스트 포인트 컬러</S.GuideSubTitle>
            <S.GuideFlexBox>
                {pointColor.map((data, i) => (
                    <S.GuideColorBox key={i}>
                        <S.ColorTextBox>
                            <p style={{color:data.color}}>{data.title}</p>
                            <S.ColorTextInfo>
                                <dl>
                                    <dt>Name</dt>
                                    <dd>{data.name}</dd>
                                </dl>
                                <dl>
                                    <dt>Hex</dt>
                                    <dd>{data.color}</dd>
                                </dl>
                                <dl>
                                    <dt>Rgb</dt>
                                    <dd>{data.rgbColor}</dd>
                                </dl>
                            </S.ColorTextInfo>
                        </S.ColorTextBox>
                        <S.ColorBox style={{backgroundColor:data.color}}></S.ColorBox>
                    </S.GuideColorBox>
                ))}
            </S.GuideFlexBox>
            <S.GuideSubTitle>Color : 컬러스타일</S.GuideSubTitle>

            <S.GuideBoxTitle>Brand Color</S.GuideBoxTitle>
            <S.GuideColorBarBox>{renderColorBars("brand")}</S.GuideColorBarBox>

            <S.GuideBoxTitle>Sub Color</S.GuideBoxTitle>
            <S.GuideColorBarBox>{renderColorBars("sub")}</S.GuideColorBarBox>

            <S.GuideBoxTitle>Gray Color</S.GuideBoxTitle>
            <S.GuideColorBarBox>{renderColorBars("gray")}</S.GuideColorBarBox>
        </>
    );
};

export default GuideColor;