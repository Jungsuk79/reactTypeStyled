import styled from "styled-components";

interface StyledGroupProps {
    gap?: number;
    align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    direction?: 'row' | 'column';
    $marginTop?: number | string;
    $fullWidth?: boolean;
}

export const SBtnGroup = styled.div<StyledGroupProps>`
    display: flex;
    gap: ${({ gap }) => (gap !== undefined ? gap : 6)}px;
    width: 100%;
    flex-wrap:wrap;
    justify-content: ${({ align }) => align || 'center'};
    flex-direction: ${({ direction }) => direction || 'row'};
    margin-bottom:10px;
    margin-top: ${({ $marginTop }) => 
        $marginTop 
            ? (typeof $marginTop === 'number' ? `${$marginTop}px` : $marginTop) 
            : '0'
    };

    & > button, & > a {
        flex: ${({ $fullWidth }) => ($fullWidth ? 1 : 'initial')};
    }

    transform: translateZ(0);
`;