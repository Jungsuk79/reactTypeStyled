import React from 'react';
import ProductItem from "../../atomic/product/ProductItem";
import S from "./ProductList.style";
import sampleProductImg01 from '../../../assets/images/product/sampleProductImg01.jpg';
import sampleProductImg02 from '../../../assets/images/product/sampleProductImg02.jpg';

const ProductList = () => {

    const products = [
        { id: 1, url: "/product/detail/1",price:'21,000',salePrice:'13,000',alt:'알트값1',src:sampleProductImg01, title:'상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1', content:'상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1' },
        { id: 2, url: "/product/detail/2",price:'31,000',salePrice:'13,000',alt:'알트값2',src:sampleProductImg02, title:'상품2', content:'상품설명2' },
        { id: 3, url: "/product/detail/3",price:'21,000',salePrice:'13,000',alt:'알트값3',src:sampleProductImg01, title:'상품3', content:'상품설명3' },
        { id: 4, url: "/product/detail/4",price:'21,000',salePrice:'13,000',alt:'알트값4',src:sampleProductImg02, title:'상품4', content:'상품설명4상품설명4상품설명4상품설명4상품설명4상품설명4상품설명4' },
    ];

    return (
        <S.ProductList>
            {products.map((product,idx) => (
                <ProductItem productPrice={product.price} productSalePrice={product.salePrice} altText={product.alt} srcUrl={product.src} isElipsis={true} productUrl={product.url} productTitle={product.title} productContent={product.content} />
            ))}
        </S.ProductList>
    );
};

export default ProductList;