import { ColorItem, FontStyleItem , FontSizeWeightItem } from '../../types/guide';
import mainBanner01 from "../images/main/main-banner01.jpg";
import mainBanner02 from "../images/main/main-banner02.jpg";
import sampleProductImg01 from "../images/product/sampleProductImg01.jpg";
import sampleProductImg02 from "../images/product/sampleProductImg02.jpg";
import sampleBanner02 from "../images/main/sample-banner02.jpg";
import sampleBanner01 from "../images/main/sample-banner01.jpg";

export const fontStyle: FontStyleItem[] = [
    {
        text:"가 A",
        title:"Pretendard Thin",
        fontWeight:"100"
    },
    {
        text:"가 A",
        title:"Pretendard Light",
        fontWeight:"300"
    },
    {
        text:"가 A",
        title:"Pretendard Regular",
        fontWeight:"400"
    },
    {
        text:"가 A",
        title:"Pretendard Semi Bold",
        fontWeight:"600"
    },
    {
        text:"가 A",
        title:"Pretendard Bold",
        fontWeight:"700"
    },
    {
        text:"가 A",
        title:"Pretendard Black",
        fontWeight:"900"
    }
]
export const fontSizeWeight: FontSizeWeightItem[] = [
    {
        title:"Heading1",
        size:"60px",
        fontWeight:"700",
        weightTxt:'black'
    },
    {
        title:"Heading2",
        size:"36px",
        fontWeight:"600",
        weightTxt:'bold'
    },
    {
        title:"Heading3",
        size:"28px",
        fontWeight:"600",
        weightTxt:'bold'
    },
    {
        title:"Heading4",
        size:"24px",
        fontWeight:"600",
        weightTxt:'bold'
    },
    {
        title:"PageTitle",
        size:"20px",
        fontWeight:"500",
        weightTxt:'semiBold'
    },
    {
        title:"PageSubtitle",
        size:"16px",
        fontWeight:"500",
        weightTxt:'semiBold'
    },
    {
        title:"Text",
        size:"13px",
        fontWeight:"400",
        weightTxt:'regular'
    },
    {
        title:"SmallText",
        size:"12px",
        fontWeight:"400",
        weightTxt:'regular'
    },
    {
        title:"TynyText",
        size:"10px",
        fontWeight:"400",
        weightTxt:'regular'
    }
]
export const pointColor: ColorItem[] = [
    {
        title:"Basic",
        name:"black",
        color:"#000000",
        rgbColor:'0,0,0'
    },
    {
        title:"Primary",
        name:"green",
        color:"#ff510c",
        rgbColor:'242,80,80'
    },
    // {
    //     title:"Secondary",
    //     name:"orange",
    //     color:"#f27830",
    //     rgbColor:'242,120,48'
    // },
    {
        title:"Warning",
        name:"red",
        color:"#ff1212",
        rgbColor:'242,80,80'
    }
]
export const colorBar: ColorItem[] = [
    // {
    //     title:"Primary Light",
    //     name:"light green",
    //     color:"#e6f6e8",
    //     rgbColor:'230,246,232',
    //     type:'brand'
    // },
    {
        title:"Primary",
        name:"green",
        color:"#ff510c",
        rgbColor:'242,80,80',
        type:'brand'
    },
    // {
    //     title:"Primary Dark",
    //     name:"dark green",
    //     color:"#00630e",
    //     rgbColor:'0,99,14',
    //     type:'brand'
    // },
    // {
    //     title:"Secondary Light",
    //     name:"light orange",
    //     color:"#fce3d4",
    //     rgbColor:'252,227,212',
    //     type:'sub'
    // },
    // {
    //     title:"Secondary",
    //     name:"orange",
    //     color:"#f27830",
    //     rgbColor:'242,120,48',
    //     type:'sub'
    // },
    // {
    //     title:"Secondary Dark",
    //     name:"dark orange",
    //     color:"#eb6413",
    //     rgbColor:'242,120,48',
    //     type:'sub'
    // },
    {
        title:"Warning",
        name:"red",
        color:"#ff1212",
        rgbColor:'255,50,50',
        type:'sub'
    },
    {
        title:"black",
        name:"black",
        color:"#000000",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 1",
        name:"grayScale 1",
        color:"#111111",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 2",
        name:"grayScale 2",
        color:"#222222",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 3",
        name:"grayScale 3",
        color:"#333333",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 4",
        name:"grayScale 4",
        color:"#666666",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 5",
        name:"grayScale 5",
        color:"#999999",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 6",
        name:"grayScale 6",
        color:"#1d1d1d",
        rgbColor:'187,187,187',
        type:'gray'
    },
    {
        title:"Greyscale 7",
        name:"grayScale 7",
        color:"#bbbbbb",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 8",
        name:"grayScale 8",
        color:"#d9d9d9",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"Greyscale 9",
        name:"grayScale 9",
        color:"#f5f5f5",
        rgbColor:'242,120,48',
        type:'gray'
    },
    {
        title:"White",
        name:"white",
        color:"#ffffff",
        rgbColor:'242,120,48',
        type:'gray'
    }
]

export const sampleSwiperData = [
    { id: 1, src:mainBanner01, text: '할인 이벤트' , subText:'내용 텍스트 내용 텍스트 내용 텍스트 내용 텍스트 내용 텍스트 ' },
    { id: 2, src:mainBanner02, text: '신상품 출시' , subText:'내용 텍스트 내용 텍스트 내용 텍스트 내용 텍스트 내용 텍스트 ' },
    { id: 3, src:mainBanner02, text: '신상품 출시' , subText:'내용 텍스트 내용 텍스트 내용 텍스트 내용 텍스트 내용 텍스트 ' }
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
export const TABS = [
    { id: 'tab01', label: '탭 타이틀01', content: "111" },
    { id: 'tab02', label: '탭 타이틀02', content: "222" },
    { id: 'tab03', label: '탭 타이틀03', content: "333" }
];

export const sampleProducts = [
    { id: 1, url: "/product/detail/1",price:'21,000',salePrice:'13,000',alt:'후드집업 베이지',src:sampleProductImg01,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }, { label: 'Best', type: 'best' }], title:'후드집업 베이지', content:'후드집업 베이색상 기본 후드티' },
    { id: 2, url: "/product/detail/2",price:'31,000',salePrice:'13,000',alt:'알트값2',src:sampleProductImg02,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }], title:'상품2', content:'상품설명2' },
    { id: 3, url: "/product/detail/3",price:'21,000',salePrice:'13,000',alt:'알트값3',src:sampleProductImg01,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }], title:'상품3', content:'상품설명3' },
    { id: 4, url: "/product/detail/4",price:'21,000',salePrice:'13,000',alt:'알트값4',src:sampleProductImg02,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }], title:'상품4', content:'상품설명4상품설명4상품설명4상품설명4상품설명4상품설명4상품설명4' },
];

export const sampleBoxDatas = [
    { id: 1,alt:'알트값1',src:sampleProductImg01},
    { id: 2,alt:'알트값2',src:sampleProductImg02},
    { id: 3,alt:'알트값3',src:sampleProductImg01},
    { id: 4,alt:'알트값4',src:sampleProductImg02},
    { id: 5,alt:'알트값5',src:sampleProductImg01},
    { id: 6,alt:'알트값6',src:sampleProductImg02},
    { id: 7,alt:'알트값7',src:sampleProductImg01},
    { id: 8,alt:'알트값8',src:sampleProductImg02},
    { id: 9,alt:'알트값9',src:sampleProductImg01},
];

export const brandSwiperData = [
    { id: 1, src:sampleBanner02 },
    { id: 2, src:sampleBanner01 },
    { id: 3, src:sampleBanner02}
];

export const sampleBrandData = [
    { id: 1, url: "/brandlist/detail/1",price:'21,000',salePrice:'13,000',alt:'후드집업 베이지',src:sampleProductImg01,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }, { label: 'Best', type: 'best' }], title:'후드집업 베이지', content:'후드집업 베이색상 기본 후드티' },
    { id: 2, url: "/brandlist/detail/2",price:'31,000',salePrice:'13,000',alt:'알트값2',src:sampleProductImg02,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }], title:'상품2', content:'상품설명2' },
    { id: 3, url: "/brandlist/detail/3",price:'21,000',salePrice:'13,000',alt:'알트값3',src:sampleProductImg01,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }], title:'상품3', content:'상품설명3' },
    { id: 4, url: "/brandlist/detail/4",price:'21,000',salePrice:'13,000',alt:'알트값4',src:sampleProductImg02,badges: [{ label: '신상품', type: 'new' }, { label: '품절', type: 'soldout' }], title:'상품4', content:'상품설명4상품설명4상품설명4상품설명4상품설명4상품설명4상품설명4' },
];