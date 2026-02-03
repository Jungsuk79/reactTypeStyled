import {createBrowserRouter, Navigate} from "react-router-dom";
import GuideContainer from "../pages/guides/GuideContainer";
import BasicLayout from "../pages/layout/BasicLayout";
import MainContainer from "../pages/main/MainContainer";
import BrandContainer from "../pages/brand/BrandContainer";
import FaqContainer from "../pages/customer/faq/FaqContainer";
import CustomerContainer from "../pages/customer/CustomerContainer";
import NoticeContainer from "../pages/customer/notice/NoticeContainer";
import NoticeDetail from "../pages/customer/notice/NoticeDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />, // 부모가 레이아웃을 잡고
        children: [
            {
                index: true,
                element: <MainContainer /> // "/"일 때 보여줄 페이지
            },
            {
                path: "brand",
                element: <BrandContainer /> // "/"일 때 보여줄 페이지
            },
            {
                path:"/customer",
                element: <CustomerContainer />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="faq" replace /> // "/"일 때 보여줄 페이지
                    },
                    {
                        path: "faq",
                        element: <FaqContainer /> // "/"일 때 보여줄 페이지
                    },
                    {
                        path: "notice",
                        element: <NoticeContainer /> // "/"일 때 보여줄 페이지
                    }
                ]
            },
            {
                path: "/customer/notice/:id",
                element: <NoticeDetail /> // "/"일 때 보여줄 페이지
            }

        ]
    },
    {
        path: "/guide",
        element: <GuideContainer />
    },
    // {
    //     path: "/test",
    //     element: <BasicCheckbox />
    // },
    // {
    //     path: "/111",
    //     element: <GuideContainer />
    // },
    // {
    //     path: "/color",
    //     element: <GuideColor />
    // },
    // {
    //     path: "/text",
    //     element: <GuideText />
    // },
    // {
    //     path: "/ui",
    //     element: <GuideUiContainer />
    // },
])

export default router;