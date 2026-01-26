import {createBrowserRouter} from "react-router-dom";
import GuideContainer from "../pages/guides/GuideContainer";
import BasicLayout from "../pages/layout/BasicLayout";
import MainContainer from "../pages/main/MainContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />, // 부모가 레이아웃을 잡고
        children: [
            {
                index: true,
                element: <MainContainer /> // "/"일 때 보여줄 페이지
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