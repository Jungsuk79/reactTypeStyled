import React, {useEffect} from 'react';
import {Outlet, useLocation, useOutletContext} from "react-router-dom";
import {LayoutContextType} from "../../types/layout";
import {faqMenuSwiperData} from "../../assets/mocks/customer.mock";
import MenuSwiperItem from "../../components/moleculs/swiper/menu/MenuSwiperItem";
import CommonSwiper from "../../components/moleculs/swiper/CommonSwiper";
import S from "./CustomerContainer.style"

const CustomerContainer = () => {

    const { setHeaderProps } = useOutletContext<LayoutContextType>();
    useEffect(() => {
        setHeaderProps({ showBack: true });
        return () => setHeaderProps(null);
    }, [setHeaderProps]);
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