import styled from 'styled-components';

const S = {
    CommonHeaderWrap: styled.div`
        position:relative;
        display:flex;
        align-items: center;
        justify-content: center;
        height:50px;
        background-color:#fff;
        padding-top: env(safe-area-inset-top);
    `,
    PageTitle: styled.h2`
        font-size:18px;
    `,
    BackButton : styled.button`
        position:absolute;
        top:50%;
        left:10px;
        transform: translateY(-50%);
        border:1px solid #333;
        padding:2px 5px;
    `,
    RightArea : styled.div`
        position:absolute;
        top:50%;
        right:10px;
        transform: translateY(-50%);
    `,
    SearchBtn : styled.button`
        border:1px solid #333;
        padding:2px 10px;
    `,
    CartWrap : styled.button`
        background-color:#fff;
        border:none;
        padding:10px;
    `
};

export default S;