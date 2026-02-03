import styled from 'styled-components';

export interface SwiperStyleProps {
    height?: string;
    $isSticky?: boolean;
}

const S = {

SwiperWrap : styled.div<SwiperStyleProps>`
    ${({$isSticky})=>$isSticky&&`
        position:sticky;
        top:0;
        left:0;
        width:100%;
        z-index:100;
        background-color:#fff;
    `}
`,
Container : styled.div<SwiperStyleProps>`
    position: relative;
    width: 100%;
    height: ${(props) => props.height || '150px'};
    overflow: hidden;
    
    .swiper {
        width: 100%;
        height: 100%;
    }

    /* 기본 도트 스타일 */
    .swiper-pagination-bullet {
        background: #ccc !important; /* 비활성 도트 색상 */
        opacity: 1 !important;       /* 기본 불투명도 조절 */
        width: 8px;
        height: 8px;
    }
    
    /* 활성화된(Active) 도트 스타일 */
    .swiper-pagination-bullet-active {
        background: #007aff !important; /* 활성 도트 색상 (원하는 색으로 변경 가능) */
        width: 8px; /* 필요시 길쭉하게 변경 가능 */
        border-radius: 4px;
    }

    /* 도트형(Bullets) 스타일: 하단 중앙 (기본 유지) */
        .swiper-pagination-bullets {
        bottom: 10px !important;
    }

    /* [1] 기본 Fraction 스타일 (중앙 하단) */
    .swiper-pagination-fraction {
        bottom: 10px;
        left: 0;
        width: 100%;
        text-align: center;
        color: #333; /* 기본 색상 */
        font-size: 14px;
    }

    /* Swiper 컨테이너에 is-custom-fraction 클래스가 있을 때의 pagination 스타일 */
    .is-custom-fraction .swiper-pagination-fraction {
        top: 10px !important;
        right: 10px !important;
        left: auto !important;
        bottom: auto !important;
        width: auto !important;

        display: inline-block !important;
        padding: 4px 12px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        border-radius: 20px;
        font-size: 11px;
    }

    /* [메뉴 모드일 때만 적용되는 스타일] */
    .is-menu-type {
        .swiper-wrapper {
            display: flex;
        }

        .swiper-slide {
            width: auto !important;
            flex-shrink: 0;
            padding: 0 15px;
            justify-content: flex-start;
            height: 100%;
            &:first-of-type {
                padding-left:0;
            }
        }
    }
    
`
};
export default S;