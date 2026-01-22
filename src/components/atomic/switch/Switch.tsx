import React, {useState} from 'react';
import S from './Switch.style';

interface BasicSwitchProps {
    id: string;
    label: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

const BasicSwitch = ({
     id,
     label,
     defaultChecked = false,
     onChange,
     disabled = false
 }: BasicSwitchProps) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleToggle = () => {
        if (disabled) return;
        const nextState = !isChecked;
        setIsChecked(nextState);
        onChange?.(nextState);
    };

    // 표시할 텍스트 결정 로직
    const getLabelText = () => {
        if (disabled) return label; // 비활성화일 때는 기본 placeholder(label)
        return isChecked ? "ON" : "OFF"; // 활성화일 때는 상태에 따라 변함
    };

    return (
        <S.SwitchWrap>
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                disabled={disabled}
                onChange={handleToggle}
                className="switch-checkbox"
            />
            <S.SwitchBox $disabled={disabled} $checked={isChecked} onClick={handleToggle}>
                <S.SwitchBall $checked={isChecked} $disabled={disabled}/>
            </S.SwitchBox>

            <S.SwitchLabel htmlFor={id} onClick={handleToggle} $disabled={disabled}>
                {getLabelText()}
            </S.SwitchLabel>
        </S.SwitchWrap>
    );
};

export default BasicSwitch;