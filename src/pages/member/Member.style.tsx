import styled from 'styled-components';

const S = {
    MemberWrap: styled.div`
        padding:0 10px 10px;
    `,
    MemberList: styled.ul`
        margin-top:20px;
        & li {
            margin-bottom:20px;
        }
    `,
    MemberButtonWrap: styled.div`
        margin-top:20px;
        text-align:center;
        & button {
            & + button {
                margin-left:5px;
            }
        }
        
    `

}
export default S;