import React, {useState} from 'react';
import S from './Guide.style';
import BasicInput from "../../components/atomic/input/BasicInput";
import BasicCheckbox from "../../components/atomic/checkbox/BasicCheckBox";
import BasicRadioBox from "../../components/atomic/radiobox/BasicRadioBox";
import Switch from "../../components/atomic/switch/Switch";
import Dropdown from "../../components/atomic/dropbox/DropDown";
import Pagination from "../../components/atomic/pagination/Pagination";
import BasicTextarea from "../../components/atomic/textarea/BasicTextarea";
import Badge from "../../components/atomic/badge/Badge";

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

    // 인풋용 state
    const [sampleInput, setSampleInput] = useState("")
    const [sampleInput01, setSampleInput01] = useState("")
    const [sampleInput02, setSampleInput02] = useState("")
    const [sampleInput03, setSampleInput03] = useState("")
    const [sampleInput04, setSampleInput04] = useState("")
    const [sampleInput05, setSampleInput05] = useState("")
    const [sampleInput06, setSampleInput06] = useState("")

    const [sampleRadio, setSampleRadio] = useState("ra01");


    return (
        <>
            <S.GuideSpace>
                <S.GuideBoxTitle>Input</S.GuideBoxTitle>
                <BasicInput
                    placeholder={"리셋버튼 없는 버전"}
                    name={"sampleInput"}
                    value={sampleInput}
                    onChange={(e) => setSampleInput(e.target.value)}
                />
                <BasicInput
                    placeholder={"기본 리셋버튼 나오는 버전"}
                    name={"sampleInput01"}
                    value={sampleInput01}
                    onChange={(e) => setSampleInput01(e.target.value)}
                /><br/>
                <BasicInput
                    placeholder={"폰트사이즈 변경"}
                    fontSize={"20px"}
                    name={"sampleInput02"}
                    value={sampleInput02}
                    onChange={(e) => setSampleInput02(e.target.value)}
                /><br />
                <BasicInput
                    placeholder={"disabled"}
                    name={"sampleInput03"}
                    value={sampleInput03}
                    onChange={(e) => setSampleInput03(e.target.value)}
                    disabled={true}
                /><br />
                <BasicInput
                    name={"sampleInput04"}
                    value={sampleInput04}
                    placeholder={"값을 입력해주세요"}
                    labelTxt={"인풋 레이블"}
                    onChange={(e) => setSampleInput04(e.target.value)}
                />
                <BasicInput
                    fullSize={true}
                    placeholder={"아이디"}
                    showTxt={true}
                    name={"sampleInput05"}
                    value={sampleInput05}
                    onChange={(e) => setSampleInput05(e.target.value)}
                />
                <BasicInput
                    type={"password"}
                    fullSize={true}
                    showTxt={true}
                    placeholder={"비밀번호"}
                    name={"sampleInput06"}
                    value={sampleInput06}
                    onChange={(e) => setSampleInput06(e.target.value)}
                />
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Checkbox</S.GuideBoxTitle>
                <BasicCheckbox/>
                <BasicCheckbox id={"check01"} labelTxt={"레이블"}/>
                <BasicCheckbox disabled={true} labelTxt={"Disable"}/>
            </S.GuideSpace>
            <S.GuideSpace>
                <S.GuideBoxTitle>Radiobox</S.GuideBoxTitle>
                <BasicRadioBox id={"ra01"} value={"ra01"} name={"group01"} checked={sampleRadio ==="ra01"} onChange={(e)=>setSampleRadio(e.target.value)} />
                <BasicRadioBox id={"ra02"} value={"ra02"} name={"group01"} checked={sampleRadio ==="ra02"} onChange={(e)=>setSampleRadio(e.target.value)} labelTxt={"레이블"}/>
                <BasicRadioBox id={"ra03"} value={"ra03"} name={"group01"} checked={sampleRadio ==="ra03"} onChange={(e)=>setSampleRadio(e.target.value)} disabled={true} labelTxt={"Disable"}/>
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
                <S.GuideBoxTitle>Badge</S.GuideBoxTitle>
                <Badge label={"신상품"} type={"new"} />
                <Badge label={"BEST"} type={"best"} />
                <Badge label={"품절"} />
                <Badge label={"신상품"} type={"new"} size={"sm"} />
                <Badge label={"BEST"} type={"best"} />
                <Badge label={"품절"} size={"lg"} />
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