import React, {useState} from 'react';
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
    description?: string;
    success?: boolean;
    error?: boolean;
    successTxt?: string;
    errorTxt?: string;
    fullSize?: boolean;
    reset?: boolean;
    showTxt?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    description,
    fullSize=false,
    success = false,
    error = false,
    successTxt,
    errorTxt,
    reset=true,
    showTxt,
    onChange,
    value
}: BasicInputProps) => {

    const [inputType, setInputType] = useState(type);

    const handleShowToggle = () => {
        setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };
    const handleReset = () => {
        if (onChange) {
            const event = {
                target: { value: "" }
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
        }
    };

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
                <input
                    id={id}
                    type={inputType}
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled} />
                {reset &&(
                    <span className="reset">
                        <button type="button" onClick={handleReset}>X</button>
                        {showTxt && type === 'password' && (
                            <button type="button" className={inputType === 'password' ? '보기' : '숨기기'} onClick={handleShowToggle}></button>
                        )}
                    </span>
                )}
            </S.BasicInputArea>
            {description && (
                <div className="under-txt">{description}</div>
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