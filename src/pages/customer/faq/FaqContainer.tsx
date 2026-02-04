import React, {useEffect, useState} from 'react';
import S from "./FaqContainer.style"

interface faqProps {
    title: string;
    type: string;
    content: string;
}

const FaqContainer = () => {

    const [faqData,setFaqData] = useState([]);
    useEffect(() => {
        const getFaqData = async() => {
            const response = await fetch("http://localhost:4000/faq");
            const data = await response.json();
            setFaqData(data);
        };
        getFaqData()
    },[]);

    const [activeIndex,setActiveIndex] = useState<number | null>(null);
    const handleChangeIndex = (idx:number) => {
        setActiveIndex(activeIndex === idx ? null : idx)
    }

    const faqListData= faqData.map((data:faqProps,idx:number)=>(
        <S.FaqList onClick={() => handleChangeIndex(idx)} key={idx}>
            <S.FaqType>{data.type}</S.FaqType>
            <S.FaqTitle className={activeIndex === idx ? "active":""}>{data.title}</S.FaqTitle>
            <S.FaqContent>{data.content}</S.FaqContent>
        </S.FaqList>
    ))

    return (
        <>
            {faqListData}
        </>
    );
};

export default FaqContainer;