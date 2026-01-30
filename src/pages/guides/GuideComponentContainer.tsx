import React, {useState} from 'react';
import S from './Guide.style';
import BasicButton from "../../components/atomic/button/BasicButton";
import BasicModal from "../../components/moleculs/modal/BasicModal";
import {useAlert} from "../../hooks/useAlert";
import {ALERT_DATA,ALERT_ID} from "../../constants/alertData";
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import SwiperItem from "../../components/moleculs/swiper/layout/SwiperItem";

import mainBanner01 from '../../assets/images/main/main-banner01.jpg';
import mainBanner02 from '../../assets/images/main/main-banner02.jpg';
import BasicTab from "../../components/moleculs/tab/BasicTab";
import MenuSwiperItem from "../../components/moleculs/swiper/menu/MenuSwiperItem";

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
    const sheetConfig3 = {
        primaryText:"확인3",
        secondaryText:"닫기3"
    }
    
    // BottomSheet
    const [activeSheet, setActiveSheet] = useState<string | null>(null);
    const openSheet = (name: string) => setActiveSheet(name);
    const closeAllSheets = () => setActiveSheet(null);

    // Swiper Data
    const sampleSwiperData = [
        { id: 1, src:mainBanner01, color: 'red', text: '할인 이벤트' },
        { id: 2, src:mainBanner02, color: 'blue', text: '신상품 출시' },
        { id: 3, src:mainBanner02, color: 'blue', text: '신상품 출시' }
    ];

    const sampleItems = sampleSwiperData.map((data) => (
        <SwiperItem
            key={data.id}
            text={data.text}
            src={data.src}
            // 필요한 경우 onClick 추가
        />
    ));

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

    // tab
    const [activeTab, setActiveTab] = useState('tab01');
    const TABS = [
        { id: 'tab01', label: '탭 타이틀01', content: "111" },
        { id: 'tab02', label: '탭 타이틀02', content: "222" },
        { id: 'tab03', label: '탭 타이틀03', content: "333" }
    ];

    return (
        <>
            <S.GuideSubTitle>Swiper Guide</S.GuideSubTitle>
            <div>
                <CommonSwiper
                    items={sampleItems}
                    height={400}
                    pagination={true}
                    navigation={true}
                    autoplay={false}
                />
            </div>
            <div>
                <CommonSwiper
                    items={sampleItems}
                    height={100}
                    pagination={false}
                    navigation={false}
                    slidesPerView={2.5}
                />
            </div>
            <div>
                <CommonSwiper
                    items={sampleItems}
                    navigation={true}
                    autoplay={false}
                />
            </div>
            <div>
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
                <BasicButton onClick={() => openSheet("todayCheck")}>오늘 하루 보지 않기</BasicButton>
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
                    서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠<br />서비스 안내 컨텐츠
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

            <BottomSheet
                sheetConfig={sheetConfig3}
                radius={"10px 10px 0 0"}
                isOpen={activeSheet === "todayCheck"}
                onClose={closeAllSheets}
                dragType={false}
                bottomBtn={false}
                bottomCancel={false}
                todayCheck={true}
            >
                <div>
                    오늘 하루 보지 않기
                </div>
            </BottomSheet>

            <S.GuideBoxTitle>Tab</S.GuideBoxTitle>
            <BasicTab
                tabs={TABS}
                activeTab={activeTab}
                onChange={setActiveTab}
                className="guide-tab-custom"
            />

        </>
    );
};

export default GuideComponentContainer;