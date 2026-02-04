import React from 'react';
import {Navigate, Outlet, useOutletContext} from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = () => {

    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const context = useOutletContext();

    if (!isLoggedIn) {

        return <Navigate to="/login" replace />; // 로그인 아닐시 로그인 페이지로~
    }
    return (
        <Outlet context={context} /> // 로그인시 자식 컨포넌트 랜더링~~~
    );
};

export default ProtectedRoute;