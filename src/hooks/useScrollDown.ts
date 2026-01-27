import { useState, useEffect, RefObject } from 'react';

export function useScrollDown(ref: RefObject<HTMLElement | null>) {
    const [isDown, setIsDown] = useState(false);
    const [posY, setPosY] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let lastY = element.scrollTop;

        const handleScroll = () => {
            const currentY = element.scrollTop;
            setPosY(currentY);// 현재 위치 저장

            // 0 이하(최상단)일 때는 무조건 보이게
            if (currentY <= 0) {
                setIsDown(false);
                return;
            }

            // 스크롤 방향 결정 (10px 이상 차이 날 때만 민감하게 반응)
            if (Math.abs(currentY - lastY) > 10) {
                setIsDown(currentY > lastY);
                lastY = currentY;
            }
        };

        element.addEventListener('scroll', handleScroll);
        return () => element.removeEventListener('scroll', handleScroll);
    }, [ref]);

    return { isDown, posY };
}