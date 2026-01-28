import React from 'react';
import S from './BasicInput.style';

export interface BasicInputProps {
    placeholder?: string;
    id?: string;
    type?: string;
    labelTxt?: string;
    radius?: string;
    fontSize?: string;
    padding?: string;
    disabled?: boolean;
    descpition?: string;
    success?: boolean;
    error?: boolean;
    successTxt?: string;
    errorTxt?: string;
    fullSize?: boolean;
    reset?: boolean;
}

const BasicInput = ({
    placeholder,
    id,
    type='text',
    labelTxt,
    radius = '0px', // 기본값 설정
    fontSize = '14px',
    padding = '16px 0',
    disabled = false,
    descpition,
    fullSize=false,
    success = false,
    error = false,
    successTxt,
    errorTxt,
    reset
}: BasicInputProps) => {
    return (
        <S.BasicInputWrap $fullSize={fullSize}>
            <S.BasicInputArea
                $success={success}
                $successTxt={successTxt}
                $error={error}
                $errorTxt={errorTxt}
                $radius={radius}
                $padding={padding}
                $fontSize={fontSize}
                $reset={reset}
            >
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
                <input type={type} id={id} placeholder={placeholder} disabled={disabled} />
                {reset &&(
                    <span className="reset">
                        <button type="button"></button>
                        <button type="button"></button>
                    </span>
                )}
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