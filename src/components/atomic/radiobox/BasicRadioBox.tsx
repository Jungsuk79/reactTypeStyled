import React from 'react';
import S from "./BasicRadioBox.style";

interface BasicRadioBoxProps {
    id: string,
    name?: string,
    value: string,
    labelTxt?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean,
    checked?: boolean,
    size?: 'sm' | 'md' | 'lg';
}
const BasicRadioBox = ({id, size='md', name, value, checked, labelTxt, onChange, disabled}:BasicRadioBoxProps) => {
    return (
        <>
            <S.RadioboxWrap $size={size}>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    checked={checked}

                />
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
            </S.RadioboxWrap>
        </>
    );
};

export default BasicRadioBox;
