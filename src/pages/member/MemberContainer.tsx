import React, {useEffect, useRef, useState} from 'react';
import S from './Member.style'
import {usePageHeader} from "../../hooks/usePageHeader";
import BasicInput from "../../components/atomic/input/BasicInput";
import BasicButton from "../../components/atomic/button/BasicButton";

interface ErrorProps {
    [key: string]: string | undefined;
}

const MemberContainer = () => {
    usePageHeader({ title: "",isSearch : false, isCart: false,isHome : true});

    const [form, setForm] = useState({
        userId: "",
        userPassword: "",
        userPasswordConfirm: "",
        userEmail: "",
        userName: "",
        userPhone: "",
        userHobby: ""
    });

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // 가입 데이터 맵핑
    const memberFields = [
        { type: "text", name: "userId", label: "아이디", placeholder: "아이디를 입력해주세요", required: true },
        { type: "password", name: "userPassword", label: "비밀번호", placeholder: "비밀번호를 입력해주세요", required: true },
        { type: "password", name: "userPasswordConfirm", label: "비밀번호 확인", placeholder: "비밀번호 재입력 해주세요", required: true },
        { type: "text", name: "userEmail", label: "이메일 주소", placeholder: "이메일 주소를 입력해주세요", required: true },
        { type: "text", name: "userName", label: "이름", placeholder: "이름을 입력해주세요", required: true },
        { type: "text", name: "userPhone", label: "휴대폰 번호", placeholder: "휴대폰 번호를 입력해주세요", required: true },
        { type: "text", name: "userHobby", label: "취미", placeholder: "취미를 입력해주세요", required: false },
    ] as const;

    const [errors, setErrors] = useState<ErrorProps>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setForm(prev => {
            const newForm = { ...prev, [name]: value };
            
            // 에러 메시지 계산용 변수
            let msg = "";

            // --- 비밀번호 로직 ---
            if (name === "userPassword") {
                const hasUpper = /[A-Z]/.test(value);
                const hasLower = /[a-z]/.test(value);
                const hasNumber = /\d/.test(value);
                const hasSpecial = /[@$!%*?&]/.test(value);
                const typesCount = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
                const isValid = value.length >= 8 && value.length <= 20 && typesCount >= 2;

                msg = (value && !isValid) ? "8~20자의 영문 대/소문자, 숫자, 특수문자 중 2종류 이상 조합만 가능합니다." : "";
                
                // ✅ 핵심: 비번을 고칠 때 '비번 확인' 메시지도 실시간으로 다시 계산
                const confirmError = (newForm.userPasswordConfirm && value !== newForm.userPasswordConfirm)
                    ? "비밀번호가 일치하지 않습니다."
                    : "";
                    
                setErrors(prevErrors => ({ 
                    ...prevErrors, 
                    userPassword: msg, 
                    userPasswordConfirm: confirmError // 비번 확인 에러도 같이 업데이트!
                }));
            }

            // --- 비밀번호 확인 로직 ---
            else if (name === "userPasswordConfirm") {
                msg = (value && value !== newForm.userPassword) ? "비밀번호가 일치하지 않습니다." : "";
                setErrors(prevErrors => ({ ...prevErrors, [name]: msg }));
            }

            // --- 기타 필드 (아이디, 이메일 등) ---
            else {
                if (name === "userId") {
                    const idRegex = /^[a-z0-9]{4,12}$/ ;
                    msg = (value && !idRegex.test(value)) ? "4~12자의 영문 소문자, 숫자만 가능합니다." : "";
                }
                if (name === "userEmail") {
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    msg = (value && !emailRegex.test(value)) ? "올바른 이메일 형식이 아닙니다." : "";
                }
                setErrors(prevErrors => ({ ...prevErrors, [name]: msg }));
            }

            return newForm;
        });
    };

    const handleReset = (name: keyof typeof form, idx: number) => {
        setForm(prev => ({ ...prev, [name]: "" }));
        setErrors(prev => ({ ...prev, [name]: "" }));
        inputRefs.current[idx]?.focus();
    };

    const handleSubmit =(e: React.FormEvent) =>{
        e.preventDefault();
        for (const field of memberFields) {
        const value = form[field.name as keyof typeof form];
        
        // 필수(required)인데 값이 없거나 공백만 있는 경우
        if (field.required && (!value || value.trim() === "")) {
            alert(`${field.label} 항목을 입력해주세요.`);
            
            // 해당 인덱스를 찾아 포커스
            const idx = memberFields.findIndex(f => f.name === field.name);
            inputRefs.current[idx]?.focus();
            return;
        }
    }
        const hasAnyError = Object.values(errors).some(err => err !== "" && err !== undefined);
        if (hasAnyError) {
            const firstErrorIdx = memberFields.findIndex(field => errors[field.name]);
            if (firstErrorIdx !== -1) {
                inputRefs.current[firstErrorIdx]?.focus();
            }
            alert("입력하신 정보를 다시 확인해주세요.");
            return; // 함수 종료 (안 넘어감)
        }
        alert("회원가입이 완료되었습니다!");
        console.log("전송 데이터:", form);
    }


    return (
        <S.MemberWrap>
            <div>회원가입</div>
            <form onSubmit={handleSubmit}>
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
                                    required={field.required}
                                />
                                {/* 만약 이 필드에 에러 메시지가 있다면 보임 */}
                                {errors[field.name] && (
                                    <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
                                        {errors[field.name]}
                                    </p>
                                )}
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