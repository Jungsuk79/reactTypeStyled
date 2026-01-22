import styled from 'styled-components';

const S={
TextareaWrap : styled.div`
    & textarea {
        appearance: none;
        outline: none;
        padding: 10px;
        border:1px solid #333;
        resize: none;
        width: 100%;
    }
`,

LabelWrap : styled.div`
    margin-bottom:5px;
    & label {
        color: #333;
        font-size: 14px;
    }
`,

HelperWrap: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 4px; /* textarea와의 간격 */
`,

CountWrap : styled.div`
    display:inline-block;
`,
CounterLabel : styled.span`
    
`,
CounterLine : styled.span`
    padding:0 2px;
`
}
export default S;