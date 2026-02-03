import styled from 'styled-components';

const S = {
    NoticeDetailWrap: styled.div`
        padding:10px 10px 0;
    `,
    NoticeDetailTitle: styled.div`
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        padding:20px 0;
        font-size:18px;
        font-weight:500;
    `,
    NoticeDetailDate: styled.div`
        text-align:right;
        font-size:12px;
        color:#999;
    `,
    NoticeDetailContent: styled.div`
        padding:20px 0;
        font-size:13px;
        color:#333;
        border-bottom:1px solid #ddd;
        min-height:calc(100vh - 300px);
    `,
    BottomArea: styled.div`
        padding:20px;
    `
}
export default S;