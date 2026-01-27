import React, {useEffect, useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";
import S from './MainContainer.style'

interface ContextType {
    setHeaderProps: (props: { title: string; showBack: boolean } | null) => void;
}

const MainContainer = () => {
    const { setHeaderProps } = useOutletContext<ContextType>();
    useEffect(() => {
        // 페이지가 마운트될 때 헤더 정보 설정
        setHeaderProps({ title: "메인로고", showBack: false });

        setActiveSheet("active"); // 바텀시트바로열기
        return () => setHeaderProps(null);
    }, [setHeaderProps]);

    // BottomSheet
    const mainSheetConfig = {
        primaryText:"확인",
        secondaryText:"닫기"
    }
    const [activeSheet, setActiveSheet] = useState<string | null>(null);
    const closeAllSheets = () => setActiveSheet(null);

    return (
        <>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>
            <div>메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br />메인콘텐츠<br /></div>

            <BottomSheet
                sheetConfig={mainSheetConfig}
                radius={"10px 10px 0 0"}
                isOpen={activeSheet === "active"}
                onClose={closeAllSheets}
                dragType={false}
                bottomBtn={false}
                bottomCancel={false}
            >
                <div>
                    팝업 컨텐츠 부분<br />
                    팝업 컨텐츠 부분<br />
                    팝업 컨텐츠 부분<br />
                    팝업 컨텐츠 부분<br />
                    팝업 컨텐츠 부분<br />
                    팝업 컨텐츠 부분<br />
                    팝업 컨텐츠 부분<br />
                </div>
                <S.BottomBtnArea>
                    오늘하루 보지않기
                </S.BottomBtnArea>
            </BottomSheet>
        </>
    );
};

export default MainContainer;