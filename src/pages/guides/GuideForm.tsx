import React, {useState} from 'react';
import S from './Guide.style';
import BasicInput from "../../components/atomic/input/BasicInput";
import BasicCheckbox from "../../components/atomic/checkbox/BasicCheckBox";
import BasicRadioBox from "../../components/atomic/radiobox/BasicRadioBox";
import Switch from "../../components/atomic/switch/Switch";
import Dropdown from "../../components/atomic/dropbox/DropDown";
import Pagination from "../../components/atomic/pagination/Pagination";
import Tag from "../../components/atomic/tag/Tag";
import BasicTextarea from "../../components/atomic/textarea/BasicTextarea";

const GuideForm = () => {

    const dropdownOptions = [
        { label: "선택하세요", value: "" },
        { label: "사과", value: "apple" },
        { label: "바나나", value: "banana" },
        { label: "포도", value: "grape" },
        { label: "오렌지", value: "orange" },
    ];

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    return (
        <>
            <S.GuideSpace>
                <S.GuideBoxTitle>Input</S.GuideBoxTitle>
                <BasicInput placeholder={"값을 입력해주세요"}/>
                <BasicInput type={"password"} placeholder={"비밀번호를 입력해주세요"}/><br/>
                <BasicInput placeholder={"값을 입력해주세요"} labelTxt={"좌측 레이블"}/>
                <BasicInput placeholder={"값을 입력해주세요"} direction={"reverse"} labelTxt={"우측 레이블"}/><br/>
                <BasicInput placeholder={"값을 입력해주세요"} fontSize={"20px"}/>
                <BasicInput placeholder={"값을 입력해주세요"} padding={"20px"}/>
                <BasicInput placeholder={"값을 입력해주세요"} disabled={true}/>
                <BasicInput placeholder={"값을 입력해주세요"} success={true}/>
                <BasicInput placeholder={"값을 입력해주세요"} error={true}/>
                <BasicInput placeholder={"값을 입력해주세요"} success={true} successTxt={"성공입니다"}/>
                <BasicInput placeholder={"값을 입력해주세요"} error={true} errorTxt={"실패입니다"}/>
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Checkbox</S.GuideBoxTitle>
                <BasicCheckbox/>
                <BasicCheckbox id={"check01"} labelTxt={"레이블"}/>
                <BasicCheckbox disabled={true} labelTxt={"Disable"}/>
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Radiobox</S.GuideBoxTitle>
                <BasicRadioBox name={"group01"}/>
                <BasicRadioBox name={"group01"} id={"radio01"} labelTxt={"레이블"}/>
                <BasicRadioBox name={"group01"} disabled={true} labelTxt={"Disable"}/>
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Switch</S.GuideBoxTitle>
                <Switch id={"switch01"} label={"Off"}/>
                <Switch id={"switch02"} label={"On"} defaultChecked={true}/>
                <Switch id={"switch03"} label={"Disabled"} disabled={true}/>
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Dropdown</S.GuideBoxTitle>
                <Dropdown options={dropdownOptions} />
                <Dropdown options={dropdownOptions} positionTop={true} width={220} />
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Paging</S.GuideBoxTitle>
                <Pagination />
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Tag</S.GuideBoxTitle>
                <Tag size={"small"}>테그</Tag>
                <Tag>테그</Tag>
                <Tag size={"large"}>테그</Tag>
                <Tag type={"primary"}>테그</Tag>
                <Tag type={"secondary"}>테그</Tag>
                <Tag type={"error"}>테그</Tag>
                <Tag type={"line"}>테그</Tag>
                <Tag>테그</Tag>
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Textarea</S.GuideBoxTitle>
                <BasicTextarea value={value1} onChange={(val) => setValue1(val || "")} />
                <BasicTextarea rows={8} maxLength={100} CountWrap={true} labelTxt={"타이틀"} placeholder={"100자 이내로 입력해주세요"} value={value2} onChange={(val) => setValue2(val || "")} />
            </S.GuideSpace>
        </>
    );
};

export default GuideForm;