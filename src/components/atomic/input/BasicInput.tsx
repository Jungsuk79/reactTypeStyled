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
    reset?: boolean;
    showTxt?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onReset?: () => void;
    inputRightSpace?:string;
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
    reset=true,
    showTxt,
    value,
    onChange,
    onReset,
    inputRightSpace

}: BasicInputProps) => {

    const [inputType, setInputType] = useState(type);

    const handleShowToggle = () => {
        setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    };

    const hasReset = reset && !!value;
    const hasShowTxt = reset && !!showTxt;
    let paddingSize = 0
    if(hasReset && hasShowTxt){
        paddingSize = 60;
    }else if(hasReset || hasShowTxt){
        paddingSize = 30;
    }


    return (
        <S.BasicInputWrap $fullSize={fullSize}>
            <S.BasicInputArea
                $radius={radius}
                $fontSize={fontSize}
                $reset={reset}
            >
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
                <input
                    id={id}
                    type={inputType}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={{ paddingRight: `${paddingSize}px` }}
                />
                {reset &&(
                    <span className="reset">
                        {value && (
                            <button type="button" onClick={onReset}>X</button>
                        )}
                        {showTxt && type === 'password' && (
                            <button type="button" className={inputType === 'password' ? '보기' : '숨기기'} onClick={handleShowToggle}></button>
                        )}
                    </span>
                )}
            </S.BasicInputArea>
        </S.BasicInputWrap>
    );
};

export default BasicInput;