import {createBrowserRouter, Navigate} from "react-router-dom";
import GuideContainer from "../pages/guides/GuideContainer";
import BasicLayout from "../pages/layout/BasicLayout";
import MainContainer from "../pages/main/MainContainer";
import BrandContainer from "../pages/brand/BrandContainer";
import BrandList from "../pages/brand/BrandList";
import FaqContainer from "../pages/customer/faq/FaqContainer";
import CustomerContainer from "../pages/customer/CustomerContainer";
import NoticeContainer from "../pages/customer/notice/NoticeContainer";
import NoticeDetail from "../pages/customer/notice/NoticeDetail";
import MypageContainer from "src/pages/mypage/MypageContainer";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import CartContainer from "../pages/cart/CartContainer";
import BrandDetail from "../pages/brand/BrandDetail";
import MemberContainer from "src/pages/member/MemberContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />, // 부모가 레이아웃을 잡고
        children: [
            {
                index: true,
                element: <MainContainer />
            },
            {
                path: "brand",
                element: <BrandContainer />
            },
            {
                path: "brandlist",
                element: <BrandList />
            },
            {
                path: "/brandlist/detail/:id",
                element: <BrandDetail />
            },
            {
                path:"/customer",
                element: <CustomerContainer />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="faq" replace />
                    },
                    {
                        path: "faq",
                        element: <FaqContainer />
                    },
                    {
                        path: "notice",
                        element: <NoticeContainer />
                    }
                ]
            },
            {
                path: "/customer/notice/:id",
                element: <NoticeDetail />
            },
            {
                element:<ProtectedRoute />,
                children:[
                    {
                        path: "/mypage",
                        element: <MypageContainer />
                    },
                    {
                        path: "/cart",
                        element: <CartContainer />
                    }
                ]
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/member",
                element: <MemberContainer />
            },

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