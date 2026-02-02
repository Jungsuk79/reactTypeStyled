import React from 'react';
import S from './Guide.style';
import { fontStyle, fontSizeWeight } from "../../assets/mocks/guide.mock";

const GuideText = () => {

    return (
        <>
            <S.GuideSubTitle>FONT : PRETENDARD</S.GuideSubTitle>
            <S.GuideFlexBox>
                {fontStyle.map((data,i)=>(
                    <S.GuideFontLineBox key={i}>
                        <dl>
                            <dt>{data.title}</dt>
                            <dd style={{fontWeight:data.fontWeight}}>{data.text}</dd>
                        </dl>
                    </S.GuideFontLineBox>
                ))}
            </S.GuideFlexBox>
            <S.GuideSubTitle>Usage : 폰트 크기 및 자족</S.GuideSubTitle>
            <S.GuideBox>
                {fontSizeWeight.map((data,i)=>(
                    <S.GuideFontBox key={i}>
                        <S.Left>
                            <S.LeftTitle>{data.title}</S.LeftTitle>
                            <S.LeftText>{data.size},{data.weightTxt}</S.LeftText>
                        </S.Left>
                        <S.Right style={{fontSize:data.size,fontWeight:data.fontWeight}}>
                            {data.title}
                        </S.Right>
                    </S.GuideFontBox>
                ))}
            </S.GuideBox>
        </>
    );
};

export default GuideText;