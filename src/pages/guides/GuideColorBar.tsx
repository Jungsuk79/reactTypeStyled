import React from 'react';
import S from "./Guide.style";
import { ColorItem } from "../../types/guide";

interface GuideColorBarProps {
    data: ColorItem;
}

const GuideColorBar = ({ data }:GuideColorBarProps) => {
    return (
        <>
            <S.ColorBar style={{backgroundColor:data.color}}></S.ColorBar>
            <S.ColorBarInfoList>
                <S.ColorBarInfoTitle>
                    {data.title}
                </S.ColorBarInfoTitle>
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
            </S.ColorBarInfoList>
        </>
    );
};

export default GuideColorBar;