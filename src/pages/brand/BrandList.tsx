import React from 'react';
import {usePageHeader} from "../../hooks/usePageHeader";
import S from "./BrandList.style"
import {sampleBrandData} from "../../assets/mocks/guide.mock";
import ProductItem from "../../components/atomic/product/ProductItem";

const BrandList = () => {
    usePageHeader({ title: "", showBack: true, isCart: true});

    const pageName = "NIKE";

    return (
        <>
            <S.PageTitle>{pageName}</S.PageTitle>
            <S.SubTitle>
                LAUNCHING
            </S.SubTitle>
            <S.BrandList>
                {sampleBrandData.map((brand,idx) => (
                    <ProductItem
                        productPrice={brand.price}
                        productSalePrice={brand.salePrice}
                        altText={brand.alt}
                        srcUrl={brand.src}
                        isElipsis={true}
                        productUrl={brand.url}
                        productTitle={brand.title}
                        productContent={brand.content}
                        isCheckbox={false}
                    />
                ))}
            </S.BrandList>

        </>
    );
};

export default BrandList;