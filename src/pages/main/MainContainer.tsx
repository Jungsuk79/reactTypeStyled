import React, {useEffect, useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";
import S from './MainContainer.style'
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import {mainBannerData,menuSwiperData,mainSwiperData} from "../../assets/mocks/main.mock";
import {useAlertStore} from "../../store/useAlertStore";
import SwiperItem from "../../components/moleculs/swiper/layout/SwiperItem";
import MenuSwiperItem from "../../components/moleculs/swiper/menu/MenuSwiperItem";

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
    const [activeSheet, setActiveSheet] = useState<string | null>(null);
    const closeAllSheets = () => setActiveSheet(null);

    // 메뉴
    const [activeMenuId, setActiveMenuId] = useState<number>(1);

    // Alert 선언
    const openAlert = useAlertStore((state) => state.openAlert);
    const alert = () => {
        openAlert({
            title: "알림",
            content: <p>오늘 하루 그만 보겠습니까?</p>,
            onConfirm: () => console.log("확인 버튼 클릭")
        });
    };

    return (
        <>
            <S.MainContent>
                <CommonSwiper
                    items={
                        mainSwiperData.map((data) => (
                            <SwiperItem
                                key={data.id}
                                text={data.text}
                                subText={data.subText}
                                src={data.src}
                                // 필요한 경우 onClick 추가
                            />
                        ))
                    }
                    height={580}
                />
                <S.MainSwiperBottom></S.MainSwiperBottom>
                <CommonSwiper
                    items={
                        menuSwiperData.map((data) => (
                            <MenuSwiperItem
                                key={data.id}
                                menuTitle={data.menuTitle}
                                defaultOn={activeMenuId === data.id}
                                onClick={() => setActiveMenuId(data.id)}
                            />
                        ))
                    }
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    freeMode={true}
                    autoplay={false}
                    height="auto"
                    isSticky={true}
                />
                <div>
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                    메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />메인 영역<br />
                </div>
            </S.MainContent>

            <BottomSheet
                radius={"10px 10px 0 0"}
                isOpen={activeSheet === "active"}
                onClose={closeAllSheets}
                onTodayClose={alert}
                dragType={false}
                bottomBtn={false}
                bottomCancel={false}
                todayCheck={true}
            >
                <CommonSwiper
                    items={
                        mainBannerData.map((data) => (
                            <SwiperItem
                                key={data.id}
                                src={data.src}
                                // 필요한 경우 onClick 추가
                            />
                        ))
                    }
                />
            </BottomSheet>
        </>
    );
};

export default MainContainer;