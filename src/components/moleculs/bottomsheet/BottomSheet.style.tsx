import styled from 'styled-components';
import {slideUp,fadeIn} from '../../../keyframes/keyframes';

export interface BottomSheetStyleProps {
    $radius?: string;
}
const S = {

Overlay : styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-out;
`,

SheetContainer : styled.div<BottomSheetStyleProps>`
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    border-radius: ${({ $radius }) => $radius || '15px 15px 0 0'};
    animation: ${slideUp} 0.3s ease-out;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
    max-height:80vh;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-out;
    z-index: 1000;
    padding-bottom:20px;
`,

SheetHeader : styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`,


HandleBarWrap : styled.div`
    position:relative;
    height:20px;
    & + h3 {
       padding-top:0; 
    }
`,
HandleBar : styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%);
    width: 40px;
    height: 4px;
    background-color: #ddd;
    border-radius: 2px;
`,

SheetTitle : styled.h3`
    font-size: 18px;
    font-weight: 600;
    padding:20px 18px 10px;
`,

CloseButton : styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #999;
`,

SheetContent : styled.div`
    flex: 0 1 auto;
    padding:1px 0;
    margin:0 18px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
`,

SheetBottom : styled.div`
    display: flex;
    justify-content: space-between;
    padding:15px 20px 0;
    gap:10px;
    & button {
        flex: 1;
    }
`

};

export default S;