import React, {useEffect} from 'react';
import CartList from "./CartList";
import {useOutletContext} from "react-router-dom";
import {LayoutContextType} from "../../types/layout";
import S from "../mypage/MypageContainer.style";
import Nodata from "../../components/atomic/nodata/Nodata";
import ProductItem from "../../components/atomic/product/ProductItem";
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import {sampleProducts} from '../../assets/mocks/guide.mock';
import {usePageHeader} from "../../hooks/usePageHeader";

const CartContainer = () => {
    const pageName = "장바구니"
    usePageHeader({ title: "", showBack: true, isCart: true});

    return (
        <>
            <S.PageTitle>
                {pageName}
            </S.PageTitle>
            <S.CartContainer>
                <Nodata>장바구니에 담긴 상품이 없습니다.</Nodata>
                <S.SubTitle>
                    베스트 상품추천
                </S.SubTitle>
                <div>
                    <CommonSwiper
                        items={
                            sampleProducts.map((product,idx) => (
                                <ProductItem isWish={false} width={'135px'} productPrice={product.price} altText={product.alt} srcUrl={product.src} isElipsis={true} productUrl={product.url} productTitle={product.title} />
                            ))
                        }
                        slidesPerView={'auto'} // 아이템 너비에 맞춰 자동으로 (강력 추천)
                        spaceBetween={12}      // 아이템 사이 간격
                        freeMode={true}   // 화살표도 보통 없음
                        autoplay={false}
                    />
                </div>
            </S.CartContainer>
        </>
    );
};

export default CartContainer;