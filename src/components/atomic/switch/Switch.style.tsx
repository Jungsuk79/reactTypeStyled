import styled from 'styled-components'

export interface StyledSwitchProps {

    $checked?: boolean;
    $disabled?: boolean;
}

const S = {

    SwitchWrap: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 5px;

        & + div {
            margin-left: 10px;
        }

        & .switch-checkbox {
            display: none;
        }
    `,

    SwitchBox: styled.div<StyledSwitchProps>`
        position: relative;
        width: 50px;
        height: 26px;
        background-color: ${props => props.$checked
                ? props.theme.PALETTE.primary["main"]
                : props.theme.PALETTE.gray[201]};
        border-radius: 15px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    `,


    SwitchBall: styled.div<StyledSwitchProps>`
        position: absolute;
        top: 2px;
        left: 2px;
        width: 22px;
        height: 22px;
        background-color: ${props => (props.$disabled ? props.theme.PALETTE.gray[900] : '#fff')};
        border-radius: 50%;
        transition: transform 0.3s ease;
        transform: ${props => props.$checked ? 'translateX(24px)' : 'translateX(0)'};
        cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};
    `,

    SwitchLabel: styled.label<StyledSwitchProps>`
        font-size: 14px;
        cursor: pointer;
        user-select: none;
    `
}
export default S;