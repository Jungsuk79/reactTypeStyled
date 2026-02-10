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
    value

}: BasicInputProps) => {

    const [inputType, setInputType] = useState(type);

    const handleShowToggle = () => {
        setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    };


    return (
        <S.BasicInputWrap $fullSize={fullSize}>
            <S.BasicInputArea
                $radius={radius}
                $fontSize={fontSize}
            >
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
                <input
                    id={id}
                    type={inputType}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={onChange}
                    name={name}
                    value={value}
                />
                <span className="reset">
                        <button type="button">X</button>
                    {showTxt && type === 'password' && (
                        <button type="button" className={inputType === 'password' ? '보기' : '숨기기'} onClick={handleShowToggle}></button>
                    )}
                </span>
            </S.BasicInputArea>
        </S.BasicInputWrap>
    );
};

export default BasicInput;