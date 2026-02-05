import React from 'react';
import ProductItem from "./ProductItem";
import S from "./Product.style";

const ProductContainer = () => {

    const products = [
        { id: 1, url: "/product/detail/1", title:'상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1상품1', content:'상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1설명1상품설명1상품설명1상품설명1상품설명1상품설명1상품설명1' },
        { id: 2, url: "/product/detail/2", title:'상품2', content:'상품설명2' },
        { id: 3, url: "/product/detail/3", title:'상품3', content:'상품설명3' },
        { id: 4, url: "/product/detail/4", title:'상품4', content:'상품설명4' },
    ];

    return (
        <S.ProductList>
            {products.map((product,idx) => (
                <ProductItem isElipsis={true} productUrl={product.url} productTitle={product.title} productContent={product.content} />
            ))}
        </S.ProductList>
    );
};

export default ProductContainer;