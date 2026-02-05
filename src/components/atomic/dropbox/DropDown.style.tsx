import styled from 'styled-components'

interface DropDownProps {
    $checked?: boolean;
    $disabled?: boolean;
    $isOpen?: boolean;
    $positionTop?: boolean;
    $width?: number | string;
}

const S = {

DropdownWrap : styled.div<DropDownProps>`
    display: inline-flex;
    align-items: center;
    gap:10px;
    position: relative;
    cursor: pointer;
    width: ${({ $width }) =>
            typeof $width === 'number' ? `${$width}px` : ($width || 'auto')};

    & + div {
        margin-left: 10px;
    }
`,

DropdownHeader : styled.div<DropDownProps>`
    width: 100%;
    min-width:120px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.$disabled ? props.theme.PALETTE.gray[101] : '#fff'};
    border-color: ${props => props.$isOpen ? props.theme.PALETTE.primary["main"] : props.theme.PALETTE.gray[900]};
`,

DropdownList : styled.ul<DropDownProps>`
    position: absolute;
    left: 0;
    width: 100%;
    margin-top: 4px;
    padding: 0;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.PALETTE.gray[900]};
    border-radius: 4px;
    z-index: 10;
    list-style: none;
    overflow: hidden;
    /* $positionTop 값에 따라 위치 변경 */
    ${({ $positionTop }) =>
            $positionTop
                    ? `
            bottom: 100%; 
            margin-bottom: 4px;
          `
                    : `
            top: 100%; 
            margin-top: 4px;
          `
    }
`,

DropdownItem : styled.li`
    padding: 10px 15px;
    &:hover {
        background-color: ${({ theme }) => theme.PALETTE.gray[900]};
        color: ${({ theme }) => theme.PALETTE.white};
    }
`,

ArrowIcon : styled.span<DropDownProps>`
    margin-left:10px;
    font-size: 10px;
    transition: transform 0.2s;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`,

DropDownlabel : styled.label<DropDownProps>`
    font-size: 14px;
`
}

export default S;