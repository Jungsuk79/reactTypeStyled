import React, {useEffect, useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";
import S from './MainContainer.style'
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import mainBanner01 from '../../assets/images/main/main-banner01.jpg';
import mainBanner02 from '../../assets/images/main/main-banner02.jpg';
import sampleBanner01 from '../../assets/images/main/sample-banner01.jpg';
import sampleBanner02 from '../../assets/images/main/sample-banner02.jpg';
import MainSwiperItem from "../../components/moleculs/swiper/main/MainSwiperItem";
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
    const mainSheetConfig = {
        primaryText:"확인",
        secondaryText:"닫기"
    }
    const [activeSheet, setActiveSheet] = useState<string | null>(null);
    const closeAllSheets = () => setActiveSheet(null);

    // Swiper Data
    const sampleSwiperData = [
        { id: 1, src:mainBanner01, color: 'red', text: '메인 타이틀\n메인타이틀 영역입니다' ,subText:'서브타이틀 영역입니다\n서브타이틀 타이틀영역 입니다.'},
        { id: 2, src:mainBanner02, color: 'blue', text: '신상품 출시' ,subText:'111' },
        { id: 3, src:mainBanner02, color: 'blue', text: '신상품 출시' ,subText:'111' }
    ];
    const sampleItems = sampleSwiperData.map((data) => (
        <MainSwiperItem
            key={data.id}
            text={data.text}
            subText={data.subText}
            src={data.src}
            // 필요한 경우 onClick 추가
        />
    ));

    const sampleSwiperData2 = [
        { id: 1, src:sampleBanner02 },
        { id: 2, src:sampleBanner01 },
        { id: 3, src:sampleBanner02}
    ];
    const sampleItems2 = sampleSwiperData2.map((data) => (
        <MainSwiperItem
            key={data.id}
            src={data.src}
            // 필요한 경우 onClick 추가
        />
    ));

    // 메뉴
    const [activeMenuId, setActiveMenuId] = useState<number>(1);
    const menuSwiperData = [
        { id: 1, menuTitle: '볼빅 최저가'},
        { id: 2, menuTitle: '베스트' },
        { id: 3, menuTitle: '아울렛' },
        { id: 4, menuTitle: '여성' },
        { id: 5, menuTitle: '남성' },
        { id: 6, menuTitle: '골프' },
        { id: 7, menuTitle: '아웃도어' },
        { id: 8, menuTitle: '스타일' }
    ];
    const menuItems = menuSwiperData.map((data) => (
        <MenuSwiperItem
            key={data.id}
            menuTitle={data.menuTitle}
            defaultOn={activeMenuId === data.id}
            onClick={() => setActiveMenuId(data.id)}
        />
    ));

    return (
        <>
            <S.MainContent>
                <CommonSwiper
                    items={sampleItems}
                    height={580}
                    pagination={true}
                    navigation={false}
                    autoplay={false}
                />
                <S.MainSwiperBottom></S.MainSwiperBottom>
                <S.MainSticky>
                    <CommonSwiper
                        items={menuItems}
                        slidesPerView={'auto'} // 아이템 너비에 맞춰 자동으로 (강력 추천)
                        spaceBetween={10}      // 아이템 사이 간격
                        freeMode={true}        // 슥슥 밀리는 느낌
                        pagination={false}     // 메뉴에는 보통 페이지 점이 없음
                        navigation={false}     // 화살표도 보통 없음
                        autoplay={false}       // 메뉴가 혼자 돌아가면 안됨
                        height="auto"          // 높이는 내용물에 맞게
                    />
                </S.MainSticky>
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
                sheetConfig={mainSheetConfig}
                radius={"10px 10px 0 0"}
                isOpen={activeSheet === "active"}
                onClose={closeAllSheets}
                dragType={false}
                bottomBtn={false}
                bottomCancel={false}
                todayCheck={true}
            >
                <CommonSwiper
                    items={sampleItems2}
                    pagination={false}
                    navigation={false}
                    autoplay={false}
                />
            </BottomSheet>
        </>
    );
};

export default MainContainer;