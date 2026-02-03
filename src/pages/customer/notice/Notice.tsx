import React from 'react';
import S from './Notice.style'
import {Link} from "react-router-dom";
interface NoticeData {
    id: number;
    title: string;
    type: string;
    content: string;
    createDate: string;
}

interface NoticeProps {
    data: NoticeData;
}

const Notice = ({data}:NoticeProps) => {
    return (
        <S.NoticeList>
            <Link to={`/customer/notice/${data.id}`}>
                <S.NoticeTitle>
                    [{data.type}] {data.title}
                </S.NoticeTitle>
            </Link>
            <S.NoticeDate>{data.createDate}</S.NoticeDate>
        </S.NoticeList>
    );
};

export default Notice;