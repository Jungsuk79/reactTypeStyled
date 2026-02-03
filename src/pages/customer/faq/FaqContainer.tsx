import React, {useState} from 'react';
import S from "./FaqContainer.style"
import {number} from "framer-motion";

const FaqContainer = () => {

    const data = [
        {
            type:'배송',
            title:'택배사로부터 상품이 분실됐다는 연락을 받았어요',
            content:'고객센터 1500-0000 또는 1:1 문의하기로 접수해주시면 택배사 확인 후 즉시 환불해 드리겠습니다.'
        },
        {
            type:'배송',
            title:'2택배사로부터 상품이 분실됐다는 연락을 받았어요',
            content:'2고객센터 1500-0000 확인 후 즉시 환불해 드리겠습니다.'
        },
        {
            type:'배송',
            title:'3택배사로부터 상품이 분실됐다는 연락을 받았어요',
            content:'3고객센터 1500-0000 택배사 확인 후 즉시 환불해 드리겠습니다.'
        },
        {
            type:'배송',
            title:'4택배사로부터 상품이 분실됐다는 연락을 받았어요',
            content:'4고객센터 1500-0000 또는 1:1 문의하기로 접수해주시면 드리겠습니다.'
        }
    ]

    const [activeIndex,setActiveIndex] = useState<number | null>(0);
    const handleChangeIndex = (idx:number) => {
        setActiveIndex(activeIndex === idx ? null : idx)
    }

    return (
        <>
            {
                data.map((item, idx) => (
                    <S.FaqList onClick={() => handleChangeIndex(idx)} key={idx}>
                        <S.FaqType>{item.type}</S.FaqType>
                        <S.FaqTitle className={activeIndex === idx ? "active":""}>{item.title}</S.FaqTitle>
                        <S.FaqContent>{item.content}</S.FaqContent>
                    </S.FaqList>
                ))
            }
        </>
    );
};

export default FaqContainer;