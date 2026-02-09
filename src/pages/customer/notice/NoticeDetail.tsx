import React, {useEffect, useState} from 'react';
import {Link, useOutletContext,useParams} from "react-router-dom";
import {LayoutContextType} from "../../../types/layout";
import S from './NoticeDetail.style'
import BasicButton from 'src/components/atomic/button/BasicButton';
import {usePageHeader} from "../../../hooks/usePageHeader";
interface NoticeData {
    id: number;
    title: string;
    type: string;
    content: string;
    createDate: string;
}
const NoticeDetail = () => {
    usePageHeader({ title: "", showBack: true, isCart: true});

    const { id } = useParams<{ id: string }>(); // URL에서 id 추출
    const [detail, setDetail] = useState<NoticeData | null>(null);

    useEffect(() => {
        const noticeData = async() => {
            const response = await fetch(`http://localhost:4000/notice/${id}`);
            const datas = await response.json();
            setDetail(datas)
        }
        noticeData();
    }, []);


    return (
        <S.NoticeDetailWrap>
            <S.NoticeDetailTitle>
                {detail?.title}
                <S.NoticeDetailDate>
                    {detail?.createDate}
                </S.NoticeDetailDate>
            </S.NoticeDetailTitle>
            <S.NoticeDetailContent>
                {detail?.content}
            </S.NoticeDetailContent>
            <S.BottomArea>
                <Link to="/customer/notice">
                   <BasicButton $width={"100%"} $variant={"line"} $shape={"round"}>목록으로</BasicButton>
                </Link>
            </S.BottomArea>
        </S.NoticeDetailWrap>
    );
};

export default NoticeDetail;