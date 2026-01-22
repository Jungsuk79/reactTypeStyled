import React from 'react';
import S from './Pagination.style';

const Pagination = () => {
    return (
        <S.PaginationWrap>
            <S.PageArrow className="arrow-prev" disabled></S.PageArrow>
            <S.PageNum className="active">1</S.PageNum>
            <S.PageNum>2</S.PageNum>
            <S.PageNum>3</S.PageNum>
            <S.PageNum>4</S.PageNum>
            <S.PageNum>5</S.PageNum>
            <S.PageArrow className="arrow-next"></S.PageArrow>
        </S.PaginationWrap>
    );
};

export default Pagination;