import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
const BrandContainer = () => {
    const { setHeaderProps } = useOutletContext();
    useEffect(() => {
        // 페이지가 마운트될 때 헤더 정보 설정
        setHeaderProps({ showBack: true });

        // 언마운트될 때 헤더 정보 초기화
        return () => setHeaderProps(null);
    }, [setHeaderProps]);

    return (
        <>
            <div>
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
                브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />브랜드 페이지<br />
            </div>
        </>
    );
};

export default BrandContainer;