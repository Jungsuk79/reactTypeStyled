import styled from 'styled-components';

export interface ModalProps {
    $alignRight: boolean;
}

const S = {

Overlay : styled.div`
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex; justify-content: center; align-items: center;
    z-index: 2000;
`,

ModalContainer : styled.div`
    background: #fff;
    border-radius: 12px;
    width: 90%; max-width: 400px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`,

ModalHeader : styled.div`
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 10px;
    h3 { 
        margin: 0;
        font-size: ${({theme}) => theme.FONT_SIZE["h6"]};
        font-weight:600;
    }
    button { background: none; border: none; font-size: 24px; cursor: pointer; color: #999; }
`,

ModalContent : styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["h7"]};
    line-height: ${({theme}) => theme.FONT_LINE["h7"]};
    min-height: 60px;
`,

ModalFooter : styled.div<ModalProps>`
    margin-top: 20px;
    display: flex; 
    gap:5px;
    justify-content: ${({ $alignRight }) => ($alignRight ? 'flex-end' : 'center')};
    button { 
        padding: 10px 20px; background: #000; color: #fff; 
        border: none; border-radius: 6px; cursor: pointer;
        &.cancel {
            background: #fff; color: #000;
            border:1px solid #000;
        }
    }
`
};

export default S;