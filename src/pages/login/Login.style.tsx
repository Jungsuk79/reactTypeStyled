import styled from 'styled-components';

const S = {
    LoginWrap: styled.div`
        padding:0 10px 10px;
    `,
    LoginTitle: styled.h2`
        font-size:40px;
        color:#333;
        font-weight:600;
        text-align:center;
        margin-bottom:20px;
    `,
    LoginList:styled.ul`
        & li + li {
            margin-top:20px;
        }
    `,
    AutoLogin:styled.div`
        margin-top:10px;
    `,
    LoginButtonWrap:styled.div`
        margin-top:20px;
    `,
    MemberButtonWrap:styled.div`
        display:flex;
        justify-content: center;
        gap:10px;
        margin-top:15px;
        a {
            position:relative;
            padding-left:10px;
            color:#666;
            font-size:13px;
            &:first-of-type{
                padding-left:0;
                &:before{
                    display:none;
                }
            }
            &:before{
                content:"";
                width:1px;
                height:8px;
                background-color:#ddd;
                position:absolute;
                top:50%;
                left:0;
                transform:translateY(-50%);
            }
        }
        
    `,
    SnsButtonWrap:styled.div`
        margin-top:60px;
        & button + button {
            margin-top:8px;
        }
    `,
    kakaoIcon:styled.span`
        display:inline-block;
        margin-right:5px;
        width:20px;
        height:20px;
        background-color:yellow;
    `,
    NaverIcon:styled.span`
        display:inline-block;
        margin-right:5px;
        width:20px;
        height:20px;
        background-color:forestgreen;
    `

}
export default S;