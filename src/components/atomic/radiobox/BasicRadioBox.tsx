import React from 'react';
import S from "./BasicRadioBox.style";

interface BasicRadioBoxProps {
    id?: string,
    name?: string,
    labelTxt?: string,
    onChange?: () => void,
    disabled?: boolean
}
const BasicRadioBox = ({id,name, labelTxt, onChange, disabled}:BasicRadioBoxProps) => {
    return (
        <>
            <S.RadioboxWrap>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    onChange={onChange}
                    disabled={disabled}
                />
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
            </S.RadioboxWrap>
        </>
    );
};

export default BasicRadioBox;
