import React, {useState} from 'react';
import S from './BasicInput.style';

export interface BasicInputProps {
    placeholder?: string;
    id?: string;
    type?: string;
    labelTxt?: string;
    radius?: string;
    fontSize?: string;
    disabled?: boolean;
    fullSize?: boolean;
    showTxt?: boolean;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    onReset?:()=>void;
    inputRef?: (el: HTMLInputElement | null) => void;
    required?:boolean
}

const BasicInput = ({
    placeholder,
    id,
    type='text',
    labelTxt,
    radius = '0px', // 기본값 설정
    fontSize = '14px',
    disabled = false,
    fullSize=false,
    showTxt,
    name,
    onChange,
    value,
    onReset,
    inputRef,
    required

}: BasicInputProps) => {

    const [inputType, setInputType] = useState(type);

    const handleShowToggle = () => {
        setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    };

    const hasReset = !!onReset && !!value;
    const hasShowTxt = !!showTxt && type === 'password';
    let paddingSize = 0;
    if (hasReset && hasShowTxt) {
        paddingSize = 60;
    } else if (hasReset || hasShowTxt) {
        paddingSize = 30;
    }

    return (
        <S.BasicInputWrap $fullSize={fullSize}>
            <S.BasicInputArea
                $radius={radius}
                $fontSize={fontSize}
            >
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt} {required && (<span>*</span>)}</label>
                )}
                <input
                    ref={inputRef}
                    id={id}
                    type={inputType}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={onChange}
                    name={name}
                    value={value}
                    style={{ paddingRight: `${paddingSize}px` }}
                />
                <span className="reset">
                    {value !== ""  &&(
                        <button type="button" onClick={onReset}>X</button>
                    )}
                    {showTxt && type === 'password' && (
                        <button type="button" className={inputType === 'password' ? '보기' : '숨기기'} onClick={handleShowToggle}></button>
                    )}
                </span>
            </S.BasicInputArea>
        </S.BasicInputWrap>
    );
};

export default BasicInput;