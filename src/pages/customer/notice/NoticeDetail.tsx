import React, {useEffect, useState} from 'react';
import {useOutletContext,useParams} from "react-router-dom";
import {LayoutContextType} from "../../../types/layout";
import S from './NoticeDetail.style'
interface NoticeData {
    id: number;
    title: string;
    type: string;
    content: string;
    createDate: string;
}
const NoticeDetail = () => {
    const { setHeaderProps } = useOutletContext<LayoutContextType>();
    const { id } = useParams<{ id: string }>(); // URL에서 id 추출
    const [detail, setDetail] = useState<NoticeData | null>(null);
    useEffect(() => {
        setHeaderProps({ showBack: true });
        return () => setHeaderProps(null);
    }, [setHeaderProps]);

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
        </S.NoticeDetailWrap>
    );
};

export default NoticeDetail;