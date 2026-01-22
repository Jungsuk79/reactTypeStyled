import React, {useState} from 'react';
import S from "./Guide.style";
import BasicTab from "../../components/moleculs/tab/BasicTab";
import {Link} from "react-router-dom";
import GuideStyleContainer from './GuideStyleContainer';
import GuideUiContainer from './GuideUiContainer';
import GuideComponentContainer from "./GuideComponentContainer";

const GuideContainer = () => {
    const [activeTab, setActiveTab] = useState('tab01');
    const TABS = [
        { id: 'tab01', label: '스타일 가이드', content: <GuideStyleContainer /> },
        { id: 'tab02', label: 'UI 가이드', content: <GuideUiContainer /> },
        { id: 'tab03', label: '컴포넌트 가이드', content: <GuideComponentContainer /> }
    ];

    return (
        <S.GuideWrapper>
            <div>
                <Link to={"/"}>메인으로 이동</Link>
            </div>
            <BasicTab
                tabs={TABS}
                activeTab={activeTab}
                onChange={setActiveTab}
                className="guide-tab-custom"
            />
        </S.GuideWrapper>
    );
};

export default GuideContainer;