import {useState,useEffect,ChangeEvent} from 'react'
import S from "./BasicTextarea.style";

interface BasicTextareaProps {
    id?: string;
    labelTxt?:string;
    rows?: number;
    placeholder?: string;
    maxLength?: number;
    value?: string;
    onChange?: (value?: string) => void;
    CountWrap?: boolean;
}
const BasicTextarea = ({
    id,
    labelTxt,
    rows,
    placeholder,
    maxLength,
    value = "",
    onChange,
    CountWrap=false
}:BasicTextareaProps) => {
    const [counterLength, setCounterLength] = useState(0);

    useEffect(() => {
        setCounterLength(value?.length ?? 0);
    }, [value]);

    const handleOnchange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const str = e.target.value;
        // maxLength를 넘지 않을 때만 부모에게 전달
        if (maxLength === undefined || str.length <= maxLength) {
            setCounterLength(str.length);
            onChange?.(str);
        }
    };

    return (
        <S.TextareaWrap>
            {labelTxt && (
                <S.LabelWrap>
                    <label htmlFor={id}>{labelTxt}</label>
                </S.LabelWrap>
            )}
            <textarea
                rows={rows}
                maxLength={maxLength}
                id={id}
                value={value ?? ''}
                placeholder={placeholder}
                onChange={handleOnchange}
            />
            {maxLength && CountWrap ? (
                <S.HelperWrap>
                    <S.CountWrap>
                        <S.CounterLabel>{counterLength}</S.CounterLabel>
                        <S.CounterLine>{`/`}</S.CounterLine>
                        <S.CounterLabel>{maxLength}</S.CounterLabel>
                    </S.CountWrap>
                </S.HelperWrap>
            ):(
                <></>
            )}
        </S.TextareaWrap>
    );
};

export default BasicTextarea;