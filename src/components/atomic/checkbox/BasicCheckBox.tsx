import React from 'react';
import S from './BasicCheckBox.style'; // 체크박스 전용 스타일이 필요할 수 있습니다.

interface BasicCheckBoxProps {
    id?: string,
    labelTxt?: string,
    onChange?: () => void,
    disabled?: boolean
}

const BasicCheckbox = ({ id, labelTxt, onChange, disabled }:BasicCheckBoxProps) => {
    return (
        <>
            <S.CheckboxWrap>
                <input
                    type="checkbox"
                    id={id}
                    onChange={onChange}
                    disabled={disabled}
                />
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
            </S.CheckboxWrap>
        </>
    );
};

export default BasicCheckbox;