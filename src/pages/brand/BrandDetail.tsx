import React from 'react';
import {usePageHeader} from "../../hooks/usePageHeader";
import {useParams} from "react-router-dom";
import {sampleBrandData} from "../../assets/mocks/guide.mock";
import S from "./BrandDetail.style";

const BrandDetail = () => {
    usePageHeader({ title: "", showBack: true, isCart: true});

    const { id } = useParams();
    const product = sampleBrandData.find((item) => item.id === Number(id));
    if (!product) {
        return <div>상품 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <S.BrandDetailImg src={product.src} alt={product.alt} />
        </>
    );
};

export default BrandDetail;