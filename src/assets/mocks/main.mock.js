import React from "react";
import sampleBanner02 from "../../assets/images/main/sample-banner02.jpg";
import sampleBanner01 from "../../assets/images/main/sample-banner01.jpg";
import mainBanner01 from "../../assets/images/main/main-banner01.jpg";
import mainBanner02 from "../../assets/images/main/main-banner02.jpg";


export const mainSwiperData = [
    { id: 1, src:mainBanner01, color: 'red', text: '메인 타이틀\n메인타이틀 영역입니다' ,subText:'서브타이틀 영역입니다\n서브타이틀 타이틀영역 입니다.'},
    { id: 2, src:mainBanner02, color: 'blue', text: '신상품 출시' ,subText:'111' },
    { id: 3, src:mainBanner02, color: 'blue', text: '신상품 출시' ,subText:'111' }
];

export const menuSwiperData = [
    { id: 1, menuTitle: '볼빅 최저가'},
    { id: 2, menuTitle: '베스트' },
    { id: 3, menuTitle: '아울렛' },
    { id: 4, menuTitle: '여성' },
    { id: 5, menuTitle: '남성' },
    { id: 6, menuTitle: '골프' },
    { id: 7, menuTitle: '아웃도어' },
    { id: 8, menuTitle: '스타일' }
];

export const mainBannerData = [
    { id: 1, src:sampleBanner02 },
    { id: 2, src:sampleBanner01 },
    { id: 3, src:sampleBanner02}
];