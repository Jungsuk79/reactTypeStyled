import React from 'react';
import S from './BasicCheckBox.style';

interface BasicCheckBoxProps {
    id?: string,
    labelTxt?: string,
    onChange?: () => void,
    disabled?: boolean,
    size?: 'sm' | 'md' | 'lg';
    iconType?: 'wish' | 'default';
    checked?: boolean;
}

const BasicCheckbox = ({ id,iconType = 'default',size='md',checked, labelTxt, onChange, disabled }:BasicCheckBoxProps) => {
    return (
        <>
            <S.CheckboxWrap $iconStyle={iconType} $size={size}>
                <input
                    type="checkbox"
                    id={id}
                    onChange={onChange}
                    disabled={disabled}
                    checked={checked}
                />
                {iconType !== 'wish' && labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}

            </S.CheckboxWrap>
        </>
    );
};

export default BasicCheckbox;