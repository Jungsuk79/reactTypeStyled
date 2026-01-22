import React from 'react';
import S from './BasycTab.style';

interface TabItem {
    id: string | number;
    label: string;
    content: React.ReactNode; // JSX 엘리먼트나 문자열 모두 허용
}

interface BasicTabProps {
    tabs: TabItem[];
    activeTab: string | number;
    onChange: (id: any) => void; // 탭 클릭 시 실행될 함수
    className?: string; // 선택적 Props (없어도 됨)
}

const BasicTab = ({tabs,activeTab,onChange,className}:BasicTabProps) => {

    const TabList = tabs.map((tab)=>(
        <S.Tab
            key={tab.id}
            $isActive={activeTab === tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={()=>onChange(tab.id)}
        >
            {tab.label}
        </S.Tab>
    ))

    return (
        <S.TabWrap className={className}>
            <S.TabList>
                {TabList}
            </S.TabList>
            <S.TabContent>
                {tabs.find(tab => tab.id === activeTab)?.content}
            </S.TabContent>
        </S.TabWrap>
    );
};

export default BasicTab;