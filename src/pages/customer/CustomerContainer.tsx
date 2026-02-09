import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {faqMenuSwiperData} from "../../assets/mocks/customer.mock";
import MenuSwiperItem from "../../components/moleculs/swiper/menu/MenuSwiperItem";
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import S from "./CustomerContainer.style"
import {usePageHeader} from "../../hooks/usePageHeader";

const CustomerContainer = () => {

    usePageHeader({ title: "", showBack: true, isCart: true});
    const { pathname } = useLocation();

    return (
        <div>
            <CommonSwiper
                items={
                    faqMenuSwiperData.map((data) => (
                        <MenuSwiperItem
                            key={data.id}
                            menuTitle={data.menuTitle}
                            linkUrl={data.linkUrl}
                            defaultOn={pathname === data.linkUrl}
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
            <S.CutomerContainer>
                <Outlet />
            </S.CutomerContainer>

        </div>
    );
};

export default CustomerContainer;