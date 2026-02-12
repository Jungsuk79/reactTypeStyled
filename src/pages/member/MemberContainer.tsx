import React, {useEffect, useRef, useState} from 'react';
import S from './Member.style'
import {usePageHeader} from "../../hooks/usePageHeader";
import BasicInput from "../../components/atomic/input/BasicInput";
import BasicButton from "../../components/atomic/button/BasicButton";

const MemberContainer = () => {
    usePageHeader({ title: "",isSearch : false, isCart: false,isHome : true});

    const [form, setForm] = useState({
        userId: "",
        userPassword: "",
        userPasswordConfirm: "",
        userEmail: "",
        userName: "",
        userPhone: ""
    });

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleReset = (name: keyof typeof form, idx: number) => {
        setForm(prev => ({ ...prev, [name]: "" }));
        inputRefs.current[idx]?.focus();
    };

    // 가입 데이터 맵핑
    const memberFields = [
        { type: "text", name: "userId", label: "아이디", placeholder: "아이디를 입력해주세요" },
        { type: "password", name: "userPassword", label: "비밀번호", placeholder: "비밀번호를 입력해주세요" },
        { type: "password", name: "userPasswordConfirm", label: "비밀번호 확인", placeholder: "비밀번호 재입력 해주세요" },
        { type: "text", name: "userEmail", label: "이메일 주소", placeholder: "이메일 주소를 입력해주세요" },
        { type: "text", name: "userName", label: "이름", placeholder: "이름을 입력해주세요" },
        { type: "text", name: "userPhone", label: "휴대폰 번호", placeholder: "휴대폰 번호를 입력해주세요" },
    ] as const;

    return (
        <S.MemberWrap>
            <div>회원가입</div>
            <form>
                <S.MemberWrap>
                    <S.MemberList>
                        {memberFields.map((field,idx) => (
                            <li key={idx}>
                                <BasicInput
                                    type={field.type}
                                    name={field.name}
                                    value={form[field.name]}
                                    labelTxt={field.label}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                    showTxt={true}
                                    onReset={() => handleReset(field.name, idx)}
                                    inputRef={(el) => (inputRefs.current[idx] = el)}
                                    fullSize={true}
                                />
                            </li>
                        ))}
                    </S.MemberList>
                    <S.MemberButtonWrap>
                        <BasicButton type="button" $variant={"line"}>취소</BasicButton>
                        <BasicButton type="submit">회원가입</BasicButton>
                    </S.MemberButtonWrap>
                </S.MemberWrap> 
            </form>
        </S.MemberWrap>
    );
};

export default MemberContainer;