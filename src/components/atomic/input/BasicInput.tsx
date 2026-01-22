import React from 'react';
import S from './BasicInput.style';

export interface BasicInputProps {
    placeholder?: string;
    id?: string;
    type?: string;
    labelTxt?: string;
    radius?: string;
    direction?: 'row' | 'column' | 'reverse'; // 구체적인 타입 지정
    fontSize?: string;
    padding?: string;
    disabled?: boolean;
    descpition?: string;
    success?: boolean;
    error?: boolean;
    successTxt?: string;
    errorTxt?: string;
}

const BasicInput = ({
    placeholder,
    id,
    type='text',
    labelTxt,
    radius = '4px', // 기본값 설정
    direction = 'column',
    fontSize = '14px',
    padding = '10px',
    disabled = false,
    descpition,
    success = false,
    error = false,
    successTxt,
    errorTxt
}: BasicInputProps) => {
    return (
        <S.BasicInputWrap>
            <S.BasicInputArea
                $success={success}
                $successTxt={successTxt}
                $error={error}
                $errorTxt={errorTxt}
                $radius={radius}
                $direction={direction}
                $padding={padding}
                $fontSize={fontSize}
            >
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
                <input type={type} id={id} placeholder={placeholder} disabled={disabled} />
            </S.BasicInputArea>
            {descpition && (
                <div className="under-txt">{descpition}</div>
            )}
            {successTxt  && (
                <div className="under-txt success">{successTxt}</div>
            )}
            {errorTxt && (
                <div className="under-txt error">{errorTxt}</div>
            )}
        </S.BasicInputWrap>
    );
};

export default BasicInput;