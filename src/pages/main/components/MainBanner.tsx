import React,{ReactNode} from 'react';
import S from './MainBanner.style';

interface MainBannerProps {
    children: ReactNode; // JSX에 들어갈 수 있는 모든 요소를 허용
}
const MainBanner = ({children}:MainBannerProps) => {
    return (
        <S.MainBannerWrap>
            {children}
        </S.MainBannerWrap>
    );
};

export default MainBanner;