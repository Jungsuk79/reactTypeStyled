import React, {useState} from 'react';
import S from './Guide.style';
import BasicButton from "../../components/atomic/button/BasicButton";
import BasicModal from "../../components/moleculs/modal/BasicModal";
import {useAlert} from "../../hooks/useAlert";
import {ALERT_DATA,ALERT_ID} from "../../constants/alertData";
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";

const GuideComponentContainer = () => {

    const { activeAlert, openAlert, closeAlert } = useAlert();

    const sheetConfig = {
        title:"서비스 안내",
        primaryText:"확인",
        secondaryText:"닫기"
    }
    const sheetConfig2 = {
        title:"서비스 안내2",
        primaryText:"확인2",
        secondaryText:"닫기2"
    }
    // BottomSheet
    const [activeSheet, setActiveSheet] = useState<string | null>(null);
    const openSheet = (name: string) => setActiveSheet(name);
    const closeAllSheets = () => setActiveSheet(null);

    return (
        <>
            <S.GuideSubTitle>Swiper Guide</S.GuideSubTitle>
            <div>
                스와이퍼
            </div>

            <S.GuideSubTitle>Component Guide</S.GuideSubTitle>
            <S.GuideBoxTitle>Alert(align:true,false true일때 우측정렬 기본은 중앙정렬)</S.GuideBoxTitle>
            <S.GuideBox>
                <S.ButtonBox>
                    <BasicButton onClick={() => openAlert(ALERT_ID.SAVE_SUCCESS)}>알럿1</BasicButton>
                    <BasicButton onClick={() => openAlert(ALERT_ID.ERROR)}>알럿2</BasicButton>
                </S.ButtonBox>
                <BasicModal
                    isOpen={activeAlert !== null}
                    onClose={closeAlert}
                    title={activeAlert ? ALERT_DATA[activeAlert]?.title : ""}
                    alignRight={false}
                >
                    {activeAlert && ALERT_DATA[activeAlert]?.content}
                </BasicModal>
            </S.GuideBox>

            <S.GuideBoxTitle>BottomSheet(bottomBtn:버튼 삭제시 false, bottomCancel: 취소버튼 없앨려면 false)</S.GuideBoxTitle>
            <S.ButtonBox>
                <BasicButton onClick={() => openSheet("service")}>드레그 버전</BasicButton>
                <BasicButton onClick={() => openSheet("login")}>닫기 버튼 버전</BasicButton>
                <BasicButton onClick={() => openSheet("noButton")}>하단 버튼없는</BasicButton>
            </S.ButtonBox>
            <BottomSheet
                sheetConfig={sheetConfig}
                isOpen={activeSheet === "service"}
                onClose={closeAllSheets}
                dragType={true}
            >
                <div>
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
                </div>
            </BottomSheet>
            <BottomSheet
                sheetConfig={sheetConfig2}
                radius={"10px 10px 0 0"}
                isOpen={activeSheet === "login"}
                onClose={closeAllSheets}
                dragType={false}
                bottomBtn={true}
                bottomCancel={false}
            >
                <div>
                    취소 버튼없는 닫기버전
                </div>
            </BottomSheet>
            <BottomSheet
                sheetConfig={sheetConfig2}
                radius={"10px 10px 0 0"}
                isOpen={activeSheet === "noButton"}
                onClose={closeAllSheets}
                dragType={false}
                bottomBtn={false}
                bottomCancel={false}
            >
                <div>
                    하단버튼 없는 닫기버전
                </div>
            </BottomSheet>
        </>
    );
};

export default GuideComponentContainer;