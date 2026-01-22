import {createBrowserRouter} from "react-router-dom";
import GuideContainer from "../pages/guides/GuideContainer";

const router = createBrowserRouter([
    {
        path: "/",
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