import React, {useEffect, useState} from 'react';
import S from './Guide.style';
import BasicButton from "../../components/atomic/button/BasicButton";
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import SwiperItem from "../../components/moleculs/swiper/layout/SwiperItem";
import BasicTab from "../../components/moleculs/tab/BasicTab";
import MenuSwiperItem from "../../components/moleculs/swiper/menu/MenuSwiperItem";
import {sampleSwiperData,menuSwiperData,TABS} from "../../assets/mocks/guide.mock"
import {useAlertStore} from "../../store/useAlertStore";
import ProductContainer from "../../components/atomic/product/ProductContainer";

const GuideComponentContainer = () => {

    // BottomSheet
    const [activeSheet, setActiveSheet] = useState<string | null>(null);
    const openSheet = (name: string) => setActiveSheet(name);
    const closeAllSheets = () => setActiveSheet(null);
    const sheetConfig = {
        title:"서비스 안내",
        primaryText:"버튼텍스트1",
        secondaryText:"버튼텍스트2"
    }
    const sheetConfig2 = {
        title:"서비스 안내2",
        secondaryText:"닫기"
    }

    // Menu 관련
    const [activeMenuId, setActiveMenuId] = useState<number>(1);

    // Tab 초기값에 따라 화면에 보여지는 탭타이틀 바뀜
    const [activeTab, setActiveTab] = useState('tab01');

    // Alert
    const openAlert = useAlertStore((state) => state.openAlert);
    const alert1 = () => {
        openAlert({
            title: "테스트 타이틀",
            content: <p>테스트 컨텐츠</p>,
            onConfirm: () => console.log("확인 버튼 클릭")
        });
    };
    const alert2 = () => {
        openAlert({
            title: "테스트 타이틀2",
            content: <p>테스트 컨텐츠2</p>,
            onConfirm: () => console.log("확인2 버튼 클릭")
        });
    };
    const alert3 = () => {
        openAlert({
            title: "테스트 타이틀3",
            content: <p>테스트 컨텐츠3</p>,
            onConfirm: () => console.log("확인3 버튼 클릭")
        });
    };
    
    // 페이지 진입시에 알럿이나 바텀시트 띄우고 싶을때
    useEffect(() => {
        const timer = setTimeout(() => {
            // openSheet("service");
            // alert3();

        }, 100); // 화면에 계속 떠있는것처럼 보이지 않기위해 딜레이 0.1초
    }, []);

    return (
        <>
            <S.GuideSubTitle>Product Guide</S.GuideSubTitle>
            <div>
                <ProductContainer />
            </div>
            <S.GuideSubTitle>Swiper Guide</S.GuideSubTitle>
            <div>
                <CommonSwiper
                    items={
                        sampleSwiperData.map((data) => (
                            <SwiperItem
                                key={data.id}
                                text={data.text}
                                subText={data.subText}
                                src={data.src}
                                // 필요한 경우 onClick 추가
                            />
                        ))
                    }
                    height={400}
                    pagination={true}
                    navigation={true}
                    autoplay={false}
                />
            </div>
            <div>
                <CommonSwiper
                    items={
                        sampleSwiperData.map((data) => (
                            <SwiperItem
                                key={data.id}
                                src={data.src}
                                // 필요한 경우 onClick 추가
                            />
                        ))
                    }
                    height={100}
                    slidesPerView={2.5}
                />
            </div>
            <div>
                <CommonSwiper
                    items={
                        sampleSwiperData.map((data) => (
                            <SwiperItem
                                key={data.id}
                                text={data.text}
                                src={data.src}
                                // 필요한 경우 onClick 추가
                            />
                        ))
                    }
                    autoplay={false}
                />
            </div>
            <div>
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
                    slidesPerView={'auto'} // 아이템 너비에 맞춰 자동으로 (강력 추천)
                    spaceBetween={10}      // 아이템 사이 간격
                    freeMode={true}   // 화살표도 보통 없음
                    autoplay={false}       // 메뉴가 혼자 돌아가면 안됨
                    height="auto"          // 높이는 내용물에 맞게
                />
            </div>

            <S.GuideSubTitle>Component Guide</S.GuideSubTitle>
            <S.GuideBoxTitle>Alert(align:true,false true일때 우측정렬 기본은 중앙정렬)</S.GuideBoxTitle>
            <S.ButtonBox>
                <BasicButton onClick={alert1}>알럿1 띄우기</BasicButton>
                <BasicButton onClick={alert2}>알럿2 띄우기</BasicButton>
            </S.ButtonBox>
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